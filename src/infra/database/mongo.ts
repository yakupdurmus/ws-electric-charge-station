import * as dotenv from 'dotenv';
import mongoose, { set, connect, ConnectionOptions } from 'mongoose';

dotenv.config();

class Mongo {
  async connectDB() {
    (mongoose as any).Promise = global.Promise;

    const options: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    const host = process.env.MONGODB_HOST;
    const user = process.env.MONGODB_USER;
    const pass = process.env.MONGODB_PASS;
    const db = process.env.MONGODB_DATABASE;

    await connect(`mongodb+srv://${user}:${pass}@${host}/${db}`, options)
      .then(() => console.info('MONGO OK'))
      .then(() => set('debug', true))
      .catch(error => console.error(error));
  }
}

export default new Mongo();
