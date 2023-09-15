export const enumContains = <T>(enumType: any, value: T): value is T => {
  return Object.values(enumType).includes(value);
};

export const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const round = (value: number, decimalPlaces: number = 0) =>
  Math.round((value + Number.EPSILON) * Math.pow(10, decimalPlaces)) /
  Math.pow(10, decimalPlaces);

export const minMax = (value: number, min?: number, max?: number) => {
  if (min != null && value < min) return min;
  if (max != null && value > max) return max;
  return value;
};

export const isNumber = (value: any): value is number =>
  typeof value === "number" && !isNaN(value);
export const isString = (value: any): value is string =>
  typeof value === "string";
export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";
