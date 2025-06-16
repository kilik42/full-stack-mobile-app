import {pgTable, pgColumn, serial, text, timestamp} from "drizzle-orm/pg-core";
import {sql} from "drizzle-orm";

export const favoritesTable = pgTable("favorites", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    recipeId: integer("recipe_id").notNull(),
    title : text("title").notNull(),
    image: text("image"),
    cookTime: text("cook_time"),
    servings: text("servings"),
    itemId: integer("item_id"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .onUpdateNow()
        .notNull(),
});