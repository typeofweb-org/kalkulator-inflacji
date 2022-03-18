import { approximatelyEqual, assert, entries } from "./utils";

export const GUSCategories = {
  zywnoscINapojeBezalkoholowe: "Żywność i napoje bezalkoholowe",
  napojeAlkoholoweIWyrobyTytoniowe: "Napoje alkoholowe i wyroby tytoniowe",
  odziezIObuwie: "Odzież i obuwie",
  uzytkowanieMieszkaniaLubDomuINosnikiEnergii:
    "Użytkowanie mieszkania lub domu i nośniki energii",
  wyposazenieMieszkaniaIProwadzenieGospodarstwaDomowego:
    "Wyposażenie mieszkania i prowadzenie gospodarstwa domowego",
  zdrowie: "Zdrowie",
  transport: "Transport",
  lacznosc: "Łączność",
  rekreacjaIKultura: "Rekreacja i kultura",
  edukacja: "Edukacja",
  restauracjeIHotele: "Restauracje i hotele",
  inneTowaryIUslugi: "Inne towary i usługi",
} as const;
export type GUSCategory = keyof typeof GUSCategories;
export type GUSCategoryTitle = typeof GUSCategories[keyof typeof GUSCategories];

type InflationRecord = Record<GUSCategory, number>;
export type WeightsRecord = Record<GUSCategory, number>;

export const inflation_01_2022: InflationRecord = {
  zywnoscINapojeBezalkoholowe: 107.6,
  napojeAlkoholoweIWyrobyTytoniowe: 104.6,
  odziezIObuwie: 103.5,
  uzytkowanieMieszkaniaLubDomuINosnikiEnergii: 114.3,
  wyposazenieMieszkaniaIProwadzenieGospodarstwaDomowego: 107.3,
  zdrowie: 104.6,
  transport: 109.9,
  lacznosc: 105.4,
  rekreacjaIKultura: 108.6,
  edukacja: 105.6,
  restauracjeIHotele: 111.5,
  inneTowaryIUslugi: 105.3,
};

export const defaultWeights_01_2022: WeightsRecord = {
  zywnoscINapojeBezalkoholowe: 26.59,
  napojeAlkoholoweIWyrobyTytoniowe: 6.32,
  odziezIObuwie: 4.47,
  uzytkowanieMieszkaniaLubDomuINosnikiEnergii: 19.33,
  wyposazenieMieszkaniaIProwadzenieGospodarstwaDomowego: 5.71,
  zdrowie: 5.69,
  transport: 9.54,
  lacznosc: 4.9,
  rekreacjaIKultura: 6.07,
  edukacja: 1.16,
  restauracjeIHotele: 4.77,
  inneTowaryIUslugi: 5.45,
};

export const gusCategoriesDetails: Record<GUSCategory, readonly string[]> = {
  zywnoscINapojeBezalkoholowe: [
    "Ryż",
    "Mąka",
    "Pieczywo",
    "Makarony i produkty makaronowe",
    "Mięso wołowe",
    "Mięso cielęce",
    "Mięso wieprzowe",
    "Mięso drobiowe",
    "Wędliny",
    "Ryby i owoce morza",
    "Mleko",
    "Jogurt, śmietana, napoje i desery mleczne",
    "Sery i twarogi",
    "Jaja",
    "Oleje i tłuszcze",
    "Tłuszcze roślinne",
    "Tłuszcze zwierzęce (w tym masło)",
    "Owoce",
    "Warzywa",
    "Cukier",
    "Kawa",
    "Herbata",
    "Kakao i czekolada w proszku",
    "Wody mineralne lub źródlane",
    "Soki owocowe i warzywne",
  ],
  napojeAlkoholoweIWyrobyTytoniowe: ["Napoje alkoholowe", "Wyroby tytoniowe"],
  odziezIObuwie: ["Odzież", "Obuwie"],
  uzytkowanieMieszkaniaLubDomuINosnikiEnergii: [
    "Opłaty na rzecz właścicieli",
    "Zaopatrywanie w wodę",
    "Wywóz śmieci",
    "Usługi kanalizacyjne",
    "Nośniki energii",
    "Energia elektryczna",
    "Gaz",
    "Opał",
    "Energia cieplna",
  ],
  wyposazenieMieszkaniaIProwadzenieGospodarstwaDomowego: [
    "Meble, artykuły dekoracyjne, sprzęt oświetleniowy",
    "Urządzenia gospodarstwa domowego",
    "Środki czyszczące i konserwujące",
    "Usługi związane z prowadzeniem gospodarstwa domowego",
  ],
  zdrowie: [
    "Wyroby farmaceutyczne",
    "Urządzenia i sprzęt terapeutyczny",
    "Usługi lekarskie",
    "Usługi stomatologiczne",
    "Usługi szpitalne i sanatoryjne",
  ],
  transport: [
    "Środki transportu (w tym samochody osobowe)",
    "Paliwa do prywatnych środków transportu",
    "Olej napędowy",
    "Benzyna",
    "Gaz ciekły i pozostałe paliwa do prywatnych środków transportu",
    "Usługi transportowe",
  ],
  lacznosc: ["Sprzęt telekomunikacyjny", "Usługi telekomunikacyjne"],
  rekreacjaIKultura: [
    "Sprzęt audiowizualny, fotograficzny i informatyczny",
    "Usługi związane z rekreacją i sportem",
    "Usługi związane z kulturą (w tym opłaty radiowo-telewizyjne)",
    "Książki",
    "Gazety i czasopisma",
    "Artykuły piśmienne, malarskie, kreślarskie",
    "Turystyka zorganizowana",
    "Turystyka zorganizowana w kraju",
    "Turystyka zorganizowana za granicą",
  ],
  edukacja: [],
  restauracjeIHotele: [],
  inneTowaryIUslugi: [
    "Usługi fryzjerskie, kosmetyczne i pielęgnacyjne",
    "Artykuły do higieny osobistej i kosmetyki",
    "Opieka społeczna",
    "Ubezpieczenia",
    "Usługi finansowe świadczone przez banki i inne instytucje",
  ],
};

function calculateTotalInflation(
  inflation: InflationRecord,
  weights: WeightsRecord
): number {
  return Number.parseFloat(
    entries(inflation)
      .reduce((acc, [category, inf]) => {
        return acc + (inf - 100) * (weights[category] / 100);
      }, 0)
      .toFixed(1)
  );
}

export const calculateTotalInflationForWeights = (weights: WeightsRecord) =>
  calculateTotalInflation(inflation_01_2022, weights);

assert(
  approximatelyEqual(
    Object.values(defaultWeights_01_2022).reduce((a, b) => a + b),
    100
  )
);
