// server/utils/db.ts
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { useRuntimeConfig } from '#imports';

let dbInstance: ReturnType<typeof drizzle> | null = null;

export async function useDb() {
  if (dbInstance) return dbInstance;

  const config = useRuntimeConfig();

  const connection = await mysql.createConnection({
    host: config.dbHost || 'localhost',
    port: config.dbPort || 3306,
    user: config.dbUser || 'root',
    password: config.dbPassword || '123456',
    database: config.dbName || 'nuxt_app',
  });

  dbInstance = drizzle(connection) as any;
  return dbInstance;
}
