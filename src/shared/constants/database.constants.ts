export const MONGODB_HOST = process.env.MONGODB_HOST;
export const MONGODB_USER = process.env.MONGODB_USER;
export const MONGODB_PASS = process.env.MONGODB_PASS;
export const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
export const DEFAULT_MONGO_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:27017/admin`;
