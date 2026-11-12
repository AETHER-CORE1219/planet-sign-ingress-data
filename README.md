# Planet sign ingress data (Moon, Venus, Mars, Mercury) 1940–2030

Free open data: every time the **Moon** (tropical and sidereal/Lahiri), **Venus, Mars and Mercury** entered a new zodiac sign between 1940 and 2030, in UTC and JST, as CSV and JSON.

| file | rows |
|---|---|
| `data/planet-sign-ingress-1940-2030.csv` / `.json` | 3,130 (Mercury 1,350 · Venus 1,153 · Mars 627) |
| `data/moon-sign-ingress-1940-2030.csv` / `.json` | 29,197 (tropical 14,599 · sidereal Lahiri 14,598) |

Generators: `scripts/ingress.mjs` (planets) and `scripts/moon-ingress.mjs` (Moon), using Astronomy Engine 2.1.19.
Pages demo: https://aether-core1219.github.io/planet-sign-ingress-data/

Browse the tables and free calculators (no signup):
- Moon sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/moon
- Venus sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/venus
- Mars sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mars
- Mercury sign: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/guides/mercury
- Ascendant (rising sign): https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/tools/ascendant
- Dataset page: https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/data

## Columns
| column | meaning |
|---|---|
| planet (planet file) | Mercury / Venus / Mars |
| zodiac (Moon file) | tropical / sidereal_lahiri |
| ingress_utc | time the body entered the sign, UTC, to the minute (seconds truncated) |
| ingress_jst | same time in Japan Standard Time (UTC+9) |
| sign_index | 0 = Aries … 11 = Pisces |
| sign_en / sign_ja | sign name in English / Japanese |
| previous_sign_en | sign the body left |

## Method
Geocentric apparent ecliptic longitude (true equinox and ecliptic of date) from [Astronomy Engine](https://github.com/cosinekitty/astronomy) 2.1.19, scanned every 6 hours (Moon: every 2 hours); each sign change is refined by bisection to within 30 seconds. Retrograde re-entries are separate rows. Sidereal = tropical minus the Lahiri ayanamsa (quadratic fit to Swiss Ephemeris SIDM_LAHIRI plus the main nutation terms).
Check: Mercury's 2026 stations computed the same way (Feb 26, Mar 20, Jun 29, Jul 23, Oct 24, Nov 13 UTC) match published dates.

## Citation and license
See [CITATION.cff](CITATION.cff). Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — please credit "GenesisCore Astrology Guide" with a link to https://genesis-astro-guide-r2owtywexa-an.a.run.app/en/data. Code: MIT.

---

## 日本語
月（西洋式・インド式ラヒリ）と金星・火星・水星が1940〜2030年に星座を移った日時を、UTCと日本時間でまとめた無料データです（CSV・JSON、CC BY 4.0）。

早見表と無料ツール（登録不要）：
- 月星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/moon
- 金星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/venus
- 火星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/mars
- 水星星座：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/guides/mercury
- アセンダント：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/tools/ascendant
- データの説明：https://genesis-astro-guide-r2owtywexa-an.a.run.app/ja/data
