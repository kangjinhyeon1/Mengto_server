import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";

configDotenv();

export const AppDataSoure= new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    database: process.env.NAME,
    password: process.env.PASSWORD,
    synchronize: true,
    logging: false,
    migrations: [],
    entities: [],
    subscribers: [],
})