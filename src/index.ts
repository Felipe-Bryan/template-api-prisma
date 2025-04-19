import 'reflect-metadata';
// import { CacheDatabase } from './main/database/redis.connection';
import { Server } from './main/server/express.server';

Promise.all([
  // CacheDatabase.connect()
]).then(() => {
  Server.listen();
});
