import * as dotenv from 'dotenv';
import url from 'url';
import MongoClient from 'mongodb';

dotenv.config();
MongoClient.MongoClient;

let cachedDb = null;
async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  const db = await client.db(url.parse(uri).pathname.substr(1));
  cachedDb = db;
  return db;
}

export default (async () => {
  const host = process.env.MONGODB_HOST;
  const user = process.env.MONGODB_USER;
  const pass = process.env.MONGODB_PASS;
  const dba = process.env.MONGODB_DATABASE;
  try {
    await connectToDatabase(`mongodb+srv://${user}:${pass}@${host}/${dba}`);
    console.log('Conected!');
  } catch (err) {
    console.log(err);
  }
})();
