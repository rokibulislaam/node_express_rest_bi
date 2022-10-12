/**
 * @param obj An object with UPPERCASE keys and number or string values
 * @returns A read only constants container
 */
const createConstants = <
  T extends Uppercase<string> | symbol | number,
  _U = T[keyof T] extends number ? number : string
>(
  obj: Record<T, _U>
): Readonly<Record<T, _U>> => {
  return Object.freeze(obj);
};

// const constants = createConstants(
const constants = {
  BCRYPT_SALT_ROUNDS: 10,
};
// );

export { constants };
