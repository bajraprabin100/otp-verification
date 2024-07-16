/**
 * Remove space from start of string
 * @param value
 * @returns
 */
export const lStrim = (value: string): string => {
  if (!value) return value;
  return value.replace(/^\s+/g, "").replace(/\s+$/g, " ");
};


/**
 * Check if the number string has two or less decimal digits
 * @param value
 * @returns
 */
export const checkIsTwoDecimals = (value: string): boolean => {
  const regex = /^\d*\.?\d{0,2}$/; // regex to match numbers up to 2 decimal points
  if (regex.test(value)) {
    return true;
  }
  return false;
};


/**
 * Round off a number to two decimal digits
 * @param value
 * @returns
 */
export const roundOff = (val: number): number => {
  const value = Number(val);
  return Math.round((value + Number.EPSILON) * 100) / 100;
};


/**
 * Slice a number or string to two decimal digits
 * @param value
 * @returns
 */
export const toFloat = (value: string | number) => {
  const number = (value)?.toString() || '0';
  let floatNumber = parseFloat(number).toFixed(2);
  floatNumber = parseFloat(floatNumber).toFixed(2);
  return floatNumber;
}


export const addFullStop = (str: string) => {
  try{
    if (!str.endsWith(".")) {
    str += ".";
  }} catch (err) {
    return str;
  }
  return str;
}

export const trimPhoneNumber = (string: string) => {
  return string?.replaceAll(" ", "")
    .replaceAll("+", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("-", "")
}
