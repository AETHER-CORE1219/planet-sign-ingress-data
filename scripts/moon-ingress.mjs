// Generate Moon sign ingresses 1940-2030: tropical, and sidereal (Lahiri) as used by Vedic astrology.
// npm i astronomy-engine@2.1.19 && node scripts/moon-ingress.mjs data/moon-sign-ingress-1940-2030
import * as A from "astronomy-engine";
import { writeFileSync } from "node:fs";
const norm = (x) => ((x % 360) + 360) % 360;
// Lahiri ayanamsa: quadratic fit to Swiss Ephemeris SIDM_LAHIRI 1900-2100 plus main nutation terms (same as the site's calculators).
function ayanamsa(d) {
  const t = (d.getTime() / 86400000 + 2440587.5 - 2451545) / 36525, r = Math.PI / 180;
  const om = (125.04452 - 1934.136261 * t) * r, ls = (280.4665 + 36000.7698 * t) * r, lm = (218.3165 + 481267.8813 * t) * r;
  const dpsi = (-17.2 * Math.sin(om) - 1.32 * Math.sin(2 * ls) - 0.23 * Math.sin(2 * lm) + 0.21 * Math.sin(2 * om)) / 3600;
  return 23.857092352 + 1.396887959 * t + 0.000307091 * t * t + dpsi;
}
const EN = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
const JA = ["牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座"];
const lonOf = { tropical: (d) => norm(A.EclipticGeoMoon(d).lon), sidereal_lahiri: (d) => norm(A.EclipticGeoMoon(d).lon - ayanamsa(d)) };
const fmtU = (ms) => new Date(ms).toISOString().slice(0, 16) + "Z";
const fmtJ = (ms) => new Date(ms + 9 * 3600e3).toISOString().slice(0, 16) + "+09:00";
const rows = [];
for (const [zodiac, f] of Object.entries(lonOf)) {
  const sign = (ms) => Math.floor(f(new Date(ms)) / 30);
  let t = Date.UTC(1940, 0, 1), s = sign(t); const end = Date.UTC(2031, 0, 1);
  while (t < end) {
    const t2 = t + 2 * 3600e3, s2 = sign(t2);
    if (s2 !== s) {
      let lo = t, hi = t2; while (hi - lo > 30e3) { const m = (lo + hi) / 2; if (sign(m) === s) lo = m; else hi = m; }
      if (hi < end) rows.push({ zodiac, ingress_utc: fmtU(Math.floor(hi / 60e3) * 60e3), ingress_jst: fmtJ(Math.floor(hi / 60e3) * 60e3), sign_index: s2, sign_en: EN[s2], sign_ja: JA[s2], previous_sign_en: EN[s] });
      s = s2;
    }
    t = t2;
  }
}
rows.sort((a, b) => a.ingress_utc < b.ingress_utc ? -1 : a.ingress_utc > b.ingress_utc ? 1 : a.zodiac < b.zodiac ? 1 : -1);
const base = process.argv[2] || "moon-sign-ingress-1940-2030";
const cols = Object.keys(rows[0]);
writeFileSync(base + ".csv", cols.join(",") + "\n" + rows.map((r) => cols.map((c) => r[c]).join(",")).join("\n") + "\n");
writeFileSync(base + ".json", JSON.stringify({ title: "Moon sign ingresses 1940-2030 (tropical and sidereal Lahiri)", license: "CC-BY-4.0",
  source: "Computed with Astronomy Engine 2.1.19 (EclipticGeoMoon, ecliptic of date); sidereal = tropical minus Lahiri ayanamsa; 2-hour scan refined by bisection to 30 seconds; times truncated to the minute",
  site: "https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/data", rows }));
console.error(rows.length, rows.filter((r) => r.zodiac === "tropical").length);
