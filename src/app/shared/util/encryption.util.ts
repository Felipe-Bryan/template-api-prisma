import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.ENCRYPTION_SECRET_KEY || ''; // 32 bytes (256 bits)
const IV = process.env.ENCRYPTION_IV || ''; // 16 bytes (128 bits)

if (SECRET_KEY.length !== 32 || IV.length !== 16) {
  throw new Error('SECRET_KEY deve ter 32 caracteres e IV 16 caracteres.');
}

export class EncryptionUtil {
  static encrypt(text: string): string {
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, IV);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  static decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, IV);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
  }
}

// const original = 'informação secreta';
// const encrypted = EncryptionUtil.encrypt(original);
// const decrypted = EncryptionUtil.decrypt(encrypted);

// Gera chave de 256 bits (32 bytes)
// openssl rand -hex 32

// Gera IV de 128 bits (16 bytes)
// openssl rand -hex 16

// Chaves devem ser mantidas em segredo e não devem ser expostas no código fonte.
// Utilize variáveis de ambiente ou serviços de gerenciamento de segredos para armazená-las de forma segura.
