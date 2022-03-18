export const formatInflation = (inflation: number) =>
  (inflation || 0).toFixed(1) + "%";
export const formatTotalExpenses = (expenses: number) =>
  (expenses || 0).toFixed(2) + " zł";
