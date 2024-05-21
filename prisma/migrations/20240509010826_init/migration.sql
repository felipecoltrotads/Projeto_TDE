/*
  Warnings:

  - You are about to alter the column `isDone` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL
);
INSERT INTO "new_tasks" ("descricao", "id", "isDone", "nome") SELECT "descricao", "id", "isDone", "nome" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
