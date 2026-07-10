# Reglas de Oro - Cybevite Project

## 🎯 Principios de Comunicación
1. **Responder SOLO lo preguntado** - Sin desviaciones ni información extra no solicitada
2. **Rol: Arquitecto de Software Experto** - Decisiones basadas en mejores prácticas y experiencia

---

## 🏗️ Arquitectura

### Stack Tecnológico
- **Frontend**: React 19 + Vite 7 + Bootstrap 5
- **Backend**: Node.js 20 + Express 5 + PostgreSQL
- **Deployment**: AWS (S3 + CloudFront + Lambda via Serverless Framework)
- **Database**: Neon PostgreSQL (producción)

### Separación de Responsabilidades
- `src/pages/` - Componentes de página (rutas)
- `src/components/` - Componentes reutilizables
- `src/server/` - Backend API completamente separado
- `public/` - Assets estáticos (imágenes, CSS, JS legacy)

---

## 🔒 Seguridad

1. **NUNCA commitear archivos `.env`** - Credenciales solo locales
2. **Usar `env.example.txt`** para documentar variables sin valores sensibles
3. **Si se exponen credenciales en Git**: cambiarlas inmediatamente
4. **Variables de entorno requeridas**:
   - Frontend: `VITE_API_URL`
   - Backend: `DATABASE_URL`, `NODE_ENV`

---

## 📁 Gestión de Archivos

### Estructura de Directorios
```
/src
  /pages          - Rutas de React
  /components     - Componentes reutilizables
  /config         - Configuración (api.js)
  /server         - Backend (separado)
    /controllers
    /routes
    /services
    /db
/public           - Assets estáticos
/dist             - Build (generado, no commitear)
```

### Archivos `.` permitidos
- `.git/` - Control de versiones
- `.gitignore` - Exclusiones de Git
- `.env` - Variables de entorno (solo local)

### Archivos `.` prohibidos
- `.vercel/` - No usamos Vercel
- `.aws-sam/` - Usamos Serverless Framework
- `.idea/` - Configuración de IDE (ignorar)

---

## 🚀 Despliegue

### Frontend (S3 + CloudFront)
```powershell
# Build
npm run client:build

# Deploy assets (cache largo)
aws s3 sync dist/ s3://cybevite-frontend-prod --delete --cache-control "public, max-age=31536000" --exclude "*.html" --exclude "*.json"

# Deploy HTML (no-cache)
aws s3 sync dist/ s3://cybevite-frontend-prod --exclude "*" --include "*.html" --include "*.json" --cache-control "no-cache"

# Invalidar CloudFront
aws cloudfront create-invalidation --distribution-id E1JZ844ZWDOEY2 --paths "/*"
```

### Backend (Lambda)
```powershell
cd src/server
serverless deploy --stage prod
```

---

## 💻 Desarrollo

### Patrones de Código

#### Estado en formularios
```javascript
// ✅ CORRECTO
const [form, setForm] = useState({ email: "" });
<input name="email" value={form.email} />

// ❌ INCORRECTO
<input name={t("contact.email")} value={form.email} />
```

#### Carga de imágenes
```javascript
// Usar LazyImage para optimización
<LazyImage src="/images/photo.jpg" alt="Description" />
```

#### API Calls
```javascript
// Usar helper de configuración
import { apiUrl } from '../config/api.js';
fetch(apiUrl('/api/endpoint'))
```

### Traducciones (i18n)
- `placeholder={t("key")}` - Para texto visible
- `name="fieldName"` - Para atributos de formulario (sin traducción)
- Archivos de traducción en `src/i18n.js`

---

## 🧪 Testing & Quality

### Antes de Commit
1. Verificar `git status`
2. No commitear archivos sensibles (`.env`, credenciales)
3. No commitear `dist/`, `node_modules/`, `.aws-sam/`
4. Mensajes de commit descriptivos

### Antes de Deploy
1. `npm run client:build` sin errores
2. Verificar que nuevas imágenes estén en `/public/images/`
3. Probar localmente con `npm run dev`
4. Invalidar CloudFront después del deploy

---

## 🗄️ Base de Datos

### Conexión
- **Desarrollo**: PostgreSQL local (puerto 5432)
- **Producción**: Neon PostgreSQL (serverless)
- **Driver**: `pg` (no Prisma actualmente)

### Migraciones
- SQL manual en `src/server/db/seed.sql`
- No usar Prisma migrations (eliminadas)

---

## 📦 Dependencies

### Frontend
- React 19, React DOM 19
- Vite 7
- Bootstrap 5, React-Bootstrap
- i18next, react-i18next
- Swiper (carouseles)
- PrimeReact (UI components)

### Backend
- Express 5
- pg (PostgreSQL driver)
- serverless-http (wrapper para Lambda)
- dotenv (variables de entorno)

### No usar
- ~~Prisma~~ (eliminado)
- ~~Vercel~~ (migrado a AWS)
- ~~AWS SAM~~ (usar Serverless Framework)

---

## 🔄 Workflow

### Flujo de Desarrollo
1. Crear/modificar código en `src/`
2. Test local: `npm run dev`
3. Build: `npm run client:build`
4. Deploy frontend: scripts AWS CLI
5. Deploy backend: `serverless deploy`
6. Invalidar CloudFront
7. Commit y push a GitHub

### Gestión de Issues
- Fix bugs en componentes específicos
- Un cambio a la vez
- Rebuild y redeploy después de cada fix
- Verificar en producción

---

## 📊 Optimización

### Imágenes
- Optimizar antes de agregar a `/public/images/`
- Usar LazyImage para lazy loading
- No mantener carpetas de backup en el repo (usar historial de Git si se necesita recuperar una versión anterior)

### Performance
- Assets con cache largo (31536000s = 1 año)
- HTML con no-cache (para SPA routing)
- CloudFront para CDN global

### Bundle Size
- Vite code-splitting automático
- Lazy load de rutas si bundle > 500KB
- Excluir tests y docs de node_modules en backend

---

## 🚨 Red Flags - Nunca Hacer

1. ❌ Commitear `.env` o credenciales
2. ❌ Hardcodear URLs de API en componentes
3. ❌ Usar `name={t(...)}` en inputs de formulario
4. ❌ Push force a main/master
5. ❌ Deploy sin invalidar CloudFront
6. ❌ Modificar directamente en producción
7. ❌ Mezclar lógica de negocio en componentes de UI
8. ❌ Usar Vercel o AWS SAM (stack definido)

---

**Última actualización**: 2026-07-10
**Stack versión**: Frontend (Vite 7 + React 19), Backend (Node 20 + Express 5), AWS (Serverless Framework)

