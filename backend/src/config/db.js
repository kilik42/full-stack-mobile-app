import {drizzle} from 'drizzle-orm/neon-http';
import {neon} from '@neondatabase/serverless';
import {ENV} from "./env.js";
import * as schema  from "../db/schema.js";


const client = neon(ENV.DATABASE_URL);
export const db = drizzle(client, {schema: {favorites: favoritesTable}});

// export const db = drizzle(client);
// export const db = drizzle(client, {schema: {favorites: favoritesTable}});
// export const db = drizzle(client, {schema: {favorites: favoritesTable}})