export const formatInflation = (inflation: number) =>
  (inflation || 0).toFixed(1) + "%";
export const formatMoney = (expenses: number) =>
  (expenses || 0).toFixed(2) + " zł";
export const getInflationColor = (inflation: number) =>
  inflation > 8
    ? "text-red-500"
    : inflation > 5
    ? "text-orange-600"
    : inflation > 3
    ? "text-yellow-700"
    : "text-black";
