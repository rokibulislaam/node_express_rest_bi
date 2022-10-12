import bcrypt from 'bcrypt';
import { constants } from '@config';

export const hashPassword = async (rawPassword: string) => {
  const salt = await bcrypt.genSalt(constants.BCRYPT_SALT_ROUNDS);
  const hash = await bcrypt.hash(rawPassword, salt);
  return hash
};
