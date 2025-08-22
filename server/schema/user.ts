// server/schema/user.ts
import { mysqlTable, varchar, int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  age: int('age').notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  gender: varchar('gender', { length: 255 }).notNull(),
  //   非必需项 avatar
  avatar: varchar('avatar', { length: 255 }),
  //   非必需项 address
  address: varchar('address', { length: 255 }),
  //   非必需项 phone
  phone: varchar('phone', { length: 255 }),
  //   非必需项 role
  role: varchar('role', { length: 255 }),
});
