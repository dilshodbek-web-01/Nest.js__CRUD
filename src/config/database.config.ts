import { registerAs } from "@nestjs/config"

declare interface DatabaseConfig {
    url: string
}

export const databaseConfig = registerAs('database', (): DatabaseConfig => ({
    url: process.env.DATABASE_URL ?? 'postgresql://postgres@127.0.0.1:password/user'
}))