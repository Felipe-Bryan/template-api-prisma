import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

const SALT_ROUNDS = parseInt(process.env.SALT || '10', 10);

export class PasswordUtil {
  /**
   * @param plainPassword Senha em texto puro.
   * @returns Hash da senha.
   */
  static async hashPassword(plainPassword: string): Promise<string> {
    const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hash;
  }

  /**
   * @param plainPassword Senha fornecida pelo usuário.
   * @param hashedPassword Hash armazenado no banco de dados.
   * @returns True se a senha estiver correta, false caso contrário.
   */
  static async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(plainPassword, hashedPassword);

    return match;
  }
}
