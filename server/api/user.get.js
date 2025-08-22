// 用户列表
// server/api/users.get.ts
import { defineEventHandler } from 'h3';
import { useDb } from '../utils/db';
import { users } from '../schema/user';

export default defineEventHandler(async (event) => {
  const db = await useDb();
  const userList = await db.select().from(users);
  return { success: true, data: userList };
});
