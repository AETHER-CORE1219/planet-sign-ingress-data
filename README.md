# Planet sign ingress data (Venus, Mars, Mercury) 1940–2030

Free open data: every time **Venus, Mars and Mercury** entered a new tropical zodiac sign between 1940 and 2030 — **3,130 ingresses**, in UTC and JST, as CSV and JSON.

- `data/planet-sign-ingress-1940-2030.csv`
- `data/planet-sign-ingress-1940-2030.json`
- Generator: `scripts/ingress.mjs` (Astronomy Engine 2.1.19)

Browse the tables and a free calculator (no signup):
- Venus sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/venus
- Mars sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mars
- Mercury sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mercury
- Dataset page: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/data

## Columns
| column | meaning |
|---|---|
| planet | Mercury / Venus / Mars |
| ingress_utc | time the planet entered the sign, UTC, to the minute (seconds truncated) |
| ingress_jst | same time in Japan Standard Time (UTC+9) |
| sign_index | 0 = Aries … 11 = Pisces |
| sign_en / sign_ja | sign name in English / Japanese |
| previous_sign_en | sign the planet left |

## Method
Geocentric apparent ecliptic longitude (true equinox and ecliptic of date) from [Astronomy Engine](https://github.com/cosinekitty/astronomy) 2.1.19, scanned every 6 hours; each sign change is refined by bisection to within 30 seconds. Retrograde re-entries are included as separate rows.
Check: Mercury's 2026 stations computed the same way (Feb 26, Mar 20, Jun 29, Jul 23, Oct 24, Nov 13 UTC) match published dates.

## License
Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — please credit "GenesisCore Astrology Guide" with a link to https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/data.
Code: MIT.

---

## 日本語
金星・火星・水星が1940〜2030年に星座（トロピカル）を移った日時3,130件を、UTCと日本時間でまとめた無料データです（CSV・JSON、CC BY 4.0）。
早見表と生年月日から調べる無料ツール（登録不要）：
- 金星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/venus
- 火星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/mars
- 水星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/mercury
- データの説明：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/data
