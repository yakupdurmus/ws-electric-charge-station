import mongoose from 'mongoose';
import {
  DEFAULT_MONGO_URL,
  MONGODB_DATABASE,
  MONGODB_HOST,
  MONGODB_PASS,
  MONGODB_USER,
} from '../../shared/constants/database.constants';

const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DATABASE}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10, // use a connection pool with a size of 10 connections
  keepAlive: true, // use a connection keep-alive
};

export const database = () =>
  mongoose
    .connect(connectionString, options)
    .then(() => process.stdout.write('MongoDB Connected!\n'))
    .catch((err) => {
      process.stdout.write(JSON.stringify(err));
      process.exit(1);
    });

export default database;
