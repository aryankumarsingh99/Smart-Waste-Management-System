import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
    issuer: 'smart-waste-management',
    audience: 'swm-users'
  });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'smart-waste-management',
      audience: 'swm-users'
    });
    return decoded;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
};

export const extractTokenFromRequest = (request) => {
  // For Next.js API routes, headers are a Headers object
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // For Next.js, cookies may be available as request.cookies.get
  const tokenFromCookie = request.cookies?.get?.('token')?.value;
  if (tokenFromCookie) {
    return tokenFromCookie;
  }

  return null;
};