-- CreateTable
CREATE TABLE "language" (
    "code" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "section" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section_translation" (
    "id" SERIAL NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cta_text" TEXT,

    CONSTRAINT "section_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about_section" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "about_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about_section_translation" (
    "id" SERIAL NOT NULL,
    "about_section_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "about_section_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "icon_path" TEXT,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_translation" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "details" TEXT,

    CONSTRAINT "service_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "image_path" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_translation" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "project_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricing_plan" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "pricing_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricing_plan_translation" (
    "id" SERIAL NOT NULL,
    "pricing_plan_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price_from" DOUBLE PRECISION,

    CONSTRAINT "pricing_plan_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_message" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_image" (
    "id" SERIAL NOT NULL,
    "section_id" INTEGER,
    "project_id" INTEGER,
    "about_section_id" INTEGER,
    "blog_post_id" INTEGER,
    "image_path" TEXT NOT NULL,
    "caption" TEXT,
    "display_order" INTEGER,

    CONSTRAINT "content_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_post" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "author" TEXT,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "blog_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_post_translation" (
    "id" SERIAL NOT NULL,
    "blog_post_id" INTEGER NOT NULL,
    "lang_code" CHAR(2) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "blog_post_translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "section_slug_key" ON "section"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "section_translation_section_id_lang_code_key" ON "section_translation"("section_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "about_section_slug_key" ON "about_section"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "about_section_translation_about_section_id_lang_code_key" ON "about_section_translation"("about_section_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "service_slug_key" ON "service"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "service_translation_service_id_lang_code_key" ON "service_translation"("service_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_key" ON "project"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "project_translation_project_id_lang_code_key" ON "project_translation"("project_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "pricing_plan_slug_key" ON "pricing_plan"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "pricing_plan_translation_pricing_plan_id_lang_code_key" ON "pricing_plan_translation"("pricing_plan_id", "lang_code");

-- CreateIndex
CREATE UNIQUE INDEX "blog_post_slug_key" ON "blog_post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "blog_post_translation_blog_post_id_lang_code_key" ON "blog_post_translation"("blog_post_id", "lang_code");

-- AddForeignKey
ALTER TABLE "section_translation" ADD CONSTRAINT "section_translation_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_translation" ADD CONSTRAINT "section_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "about_section_translation" ADD CONSTRAINT "about_section_translation_about_section_id_fkey" FOREIGN KEY ("about_section_id") REFERENCES "about_section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "about_section_translation" ADD CONSTRAINT "about_section_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_translation" ADD CONSTRAINT "service_translation_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_translation" ADD CONSTRAINT "service_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_translation" ADD CONSTRAINT "project_translation_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_translation" ADD CONSTRAINT "project_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricing_plan_translation" ADD CONSTRAINT "pricing_plan_translation_pricing_plan_id_fkey" FOREIGN KEY ("pricing_plan_id") REFERENCES "pricing_plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricing_plan_translation" ADD CONSTRAINT "pricing_plan_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_image" ADD CONSTRAINT "content_image_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_image" ADD CONSTRAINT "content_image_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_image" ADD CONSTRAINT "content_image_about_section_id_fkey" FOREIGN KEY ("about_section_id") REFERENCES "about_section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_image" ADD CONSTRAINT "content_image_blog_post_id_fkey" FOREIGN KEY ("blog_post_id") REFERENCES "blog_post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_post_translation" ADD CONSTRAINT "blog_post_translation_blog_post_id_fkey" FOREIGN KEY ("blog_post_id") REFERENCES "blog_post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_post_translation" ADD CONSTRAINT "blog_post_translation_lang_code_fkey" FOREIGN KEY ("lang_code") REFERENCES "language"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
