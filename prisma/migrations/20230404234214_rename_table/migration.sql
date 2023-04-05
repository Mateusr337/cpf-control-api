/*
  Warnings:

  - You are about to drop the `restrictsCpfs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "restrictsCpfs";

-- CreateTable
CREATE TABLE "restrictedCpfs" (
    "id" SERIAL NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restrictedCpfs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restrictedCpfs_cpf_key" ON "restrictedCpfs"("cpf");
