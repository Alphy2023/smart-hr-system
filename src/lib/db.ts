import { PrismaClient } from "@prisma/client";

// Extend the global object to include the `prisma` property
declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Use the existing instance in development to avoid multiple connections
export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
