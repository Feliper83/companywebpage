-- ============================================================
-- ELIMINAR: todos los blogs de la base de datos (produccion Neon)
-- Se borran hijos primero para no depender de ON DELETE CASCADE.
-- Ejecutar con: node src/server/delete-blogs.js (hace backup antes)
-- ============================================================

BEGIN;

-- 1. Imagenes asociadas a blogs (content_image compartida: solo las de blog)
DELETE FROM cybevite.content_image WHERE blog_post_id IS NOT NULL;

-- 2. Traducciones de los blogs
DELETE FROM cybevite.blog_post_translation;

-- 3. Blogs
DELETE FROM cybevite.blog_post;

-- 4. Resetear secuencias de IDs
ALTER SEQUENCE cybevite.blog_post_id_seq RESTART WITH 1;
ALTER SEQUENCE cybevite.blog_post_translation_id_seq RESTART WITH 1;

COMMIT;
