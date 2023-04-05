-- CreateTable
CREATE TABLE "restrictsCpfs" (
    "id" SERIAL NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restrictsCpfs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restrictsCpfs_cpf_key" ON "restrictsCpfs"("cpf");
