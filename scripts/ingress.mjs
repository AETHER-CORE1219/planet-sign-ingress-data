// Generate tropical sign ingresses of Mercury, Venus and Mars with Astronomy Engine.
// npm i astronomy-engine@2.1.19 && node scripts/ingress.mjs > ingress.json
import * as A from "astronomy-engine";
const lon = (b, d) => ((A.Ecliptic(A.GeoVector(b, d, true)).elon % 360) + 360) % 360; // geocentric apparent, true ecliptic of date
const sign = (b, d) => Math.floor(lon(b, d) / 30);
const out = {};
for (const b of ["Mercury", "Venus", "Mars"]) {
  const ev = []; let t = Date.UTC(1939, 11, 1); const end = Date.UTC(2031, 0, 1); let s = sign(b, new Date(t));
  ev.push([new Date(t).toISOString().slice(0, 16), s]);
  while (t < end) {
    const t2 = t + 6 * 3600e3, s2 = sign(b, new Date(t2));
    if (s2 !== s) { let lo = t, hi = t2; while (hi - lo > 30e3) { const m = (lo + hi) / 2; if (sign(b, new Date(m)) === s) lo = m; else hi = m; } ev.push([new Date(hi).toISOString().slice(0, 16), s2]); s = s2; }
    t = t2;
  }
  out[b] = ev;
}
console.log(JSON.stringify(out));
