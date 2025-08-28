-- CreateTable
CREATE TABLE "benefits" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "benefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "experience" VARCHAR(100) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "skills" TEXT[],
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
