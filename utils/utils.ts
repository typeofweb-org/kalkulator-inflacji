const EPSILON = 0.00001;
export const approximatelyEqual = (a: number, b: number) => {
  return Math.abs(a - b) / Math.min(a, b) < EPSILON;
};

export function assert(
  predicate: unknown,
  message?: string
): asserts predicate {
  if (!predicate) {
    throw new Error(message || `predicate is falsy`);
  }
}

export const entries = <Obj extends Record<keyof any, unknown>>(obj: Obj) =>
  Object.entries(obj) as [keyof Obj & string, Obj[keyof Obj]][];

export const fromEntries = <
  Arr extends readonly (readonly [string, unknown])[]
>(
  arr: Arr
): Record<Arr[number][0], Arr[number][1]> => {
  return Object.fromEntries(arr) as Record<Arr[number][0], Arr[number][1]>;
};

export const mapObject = <Obj extends Record<keyof any, unknown>, T>(
  obj: Obj,
  fn: (key: keyof Obj, value: Obj[keyof Obj]) => T
): Record<keyof Obj & string, T> =>
  fromEntries(
    entries(obj).map(([key, value]) => [key, fn(key, value)] as const)
  );

export const round = (num: number, fixed: number) =>
  Number.parseFloat(num.toFixed(fixed));
