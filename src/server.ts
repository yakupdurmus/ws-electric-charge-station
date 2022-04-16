import app from './app';
import * as dotenv from 'dotenv';
import { PORT } from './shared/constants/app.constants';

dotenv.config();

app.listen(PORT, (): boolean =>
  process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
);
