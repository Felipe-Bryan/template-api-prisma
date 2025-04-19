import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

const EXPIRES_IN = '1h'; // ou '15m', '7d', etc

export class AuthUtil {
  static generateToken(data: any): string {
    return jwt.sign(data, JWT_SECRET, { expiresIn: EXPIRES_IN });
  }

  static verifyToken(token: string): any {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }

  static decodeToken(token: string): any {
    const result = jwt.decode(token);

    if (!result) {
      return null;
    }

    return result;
  }
}

// Authorization: Bearer <token>
// const token = jwt.sign({ userId: '123', role: 'admin' }, JWT_SECRET);

// Rota pública
// router.post('/login', async (req, res) => {
//   - Aqui você verificaria as credenciais do usuário e criaria o token
//   const token = AuthUtil.generateToken({ userId: '123', role: 'admin' });

//   res.json({ token });
// });
