import { configDotenv } from "dotenv";

configDotenv();

export const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY;