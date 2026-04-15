import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./relations";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
	throw new Error("No se encontró el punto de conexión de la base de datos.");
}

export const db = drizzle(databaseUrl, {
	schema,
	relations,
});
