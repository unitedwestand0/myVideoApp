import bcrypt from 'bcrypt';

export const hashPassword = async (originalPassword: string): Promise<string> => {
    const hashedPassword = await bcrypt.hash(originalPassword,16);
    return hashedPassword;
};

export const compareHashedPassword = async (originalPassword: string, dbPassword: string): Promise<boolean> => {
    const result = await bcrypt.compare(originalPassword, dbPassword);
    return result;
};