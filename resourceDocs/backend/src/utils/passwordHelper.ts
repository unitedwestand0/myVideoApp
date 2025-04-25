import bcrypt from "bcrypt";

export const hashPassword = async (
  orignalPassword: string
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(orignalPassword, 16);
  return hashedPassword;
};

export const compareHashedPassword = async (
  orignalPassword: string,
  dbPassword: string
): Promise<boolean> => {
  const result = await bcrypt.compare(orignalPassword, dbPassword);
  return result;
};
