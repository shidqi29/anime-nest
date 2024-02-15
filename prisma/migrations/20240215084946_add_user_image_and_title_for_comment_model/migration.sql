/*
  Warnings:

  - Added the required column `title` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_image` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_image` VARCHAR(191) NOT NULL;
