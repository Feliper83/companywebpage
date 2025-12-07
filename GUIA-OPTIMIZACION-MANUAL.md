# 🎨 GUÍA DE OPTIMIZACIÓN MANUAL - Cybevite

## 📝 Instrucciones Paso a Paso

### 🌐 Herramienta: Squoosh.app (Google)

**URL:** https://squoosh.app

**Por qué:** Gratis, rápido, sin instalación, control total de calidad.

---

## 🎯 LISTA DE IMÁGENES A OPTIMIZAR

### ✅ ORDEN RECOMENDADO (de mayor a menor impacto):

#### 1️⃣ `public/images/solutions/software-development.jpg` (18.21 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\solutions\software-development.jpg
🎚️ Configuración Squoosh:
   - Codec: MozJPEG
   - Quality: 85% (es foto de servicio, necesita buena calidad)
   - Resize: Si width > 1920px → Resize a 1920px
   - Effort: 5 (default)
🎯 Target: ~400-500 KB
💾 Guardar como: software-development.jpg (mismo nombre)
📂 Reemplazar en: public/images/solutions/
```

#### 2️⃣ `public/images/jobs/dba-engineer.jpg` (17.39 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\jobs\dba-engineer.jpg
🎚️ Configuración:
   - Codec: MozJPEG
   - Quality: 85%
   - Resize: Si > 1920px → 1920px
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 3️⃣ `public/images/jobs/ios-developer.jpg` (16.08 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\jobs\ios-developer.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 4️⃣ `public/images/jobs/iod-developer.jpg` (16.08 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\jobs\iod-developer.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 5️⃣ `public/images/solutions/iam.jpg` (14.10 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\solutions\iam.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 6️⃣ `public/images/solutions/artificial-intelligence.jpg` (10.03 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\solutions\artificial-intelligence.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 7️⃣ `public/images/solutions/software-augmentation.jpg` (9.13 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\solutions\software-augmentation.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 8️⃣ `public/images/jobs/fullstack-engineer.jpg` (6.96 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\jobs\fullstack-engineer.jpg
🎚️ Configuración: Quality 85%
🎯 Target: ~400-500 KB
💾 Guardar y reemplazar
```

#### 9️⃣ `public/images/logo.png` (1.34 MB)
```
📁 Abrir: C:\Users\Felipe\WebstormProjects\cybevite\public\images\logo.png
🎚️ Configuración:
   - Codec: OxiPNG (mejor para logos)
   - Effort: 3 (comprimir más)
🎯 Target: ~200-300 KB
💾 Guardar y reemplazar
```

---

## 📸 INSTRUCCIONES DETALLADAS - Squoosh.app

### Paso a paso para cada imagen:

1. **Abrir Squoosh.app**
   - Ir a: https://squoosh.app
   - O arrastrar la imagen directamente

2. **Cargar imagen**
   - Click en "Select an image"
   - O arrastrar archivo desde carpeta

3. **Configurar compresión** (Panel derecho)
   ```
   Para JPG:
   ┌─────────────────────────┐
   │ Compress               │
   │ ▼ MozJPEG              │
   │                        │
   │ Quality: [====|] 85%   │
   │ □ Separate Chroma      │
   │ Effort: [===|] 5       │
   └─────────────────────────┘
   
   Para PNG:
   ┌─────────────────────────┐
   │ Compress               │
   │ ▼ OxiPNG               │
   │                        │
   │ Effort: [===|] 3       │
   └─────────────────────────┘
   ```

4. **Verificar tamaño** (Abajo a la derecha)
   ```
   Original: 18.2 MB
   Compressed: 420 KB  ✅ PERFECTO
   
   Si > 600 KB: Bajar quality a 80%
   Si < 200 KB: Subir quality a 90%
   ```

5. **Resize si necesario** (Panel derecho)
   ```
   Si imagen original es muy grande:
   ┌─────────────────────────┐
   │ Resize                 │
   │ ☑ Enable               │
   │                        │
   │ Width:  [1920]         │
   │ Height: [auto]         │
   │ Method: Lanczos3       │
   └─────────────────────────┘
   ```

6. **Descargar**
   - Click en botón de descarga (esquina inferior derecha)
   - Se descarga con mismo nombre

7. **Reemplazar archivo original**
   - Copiar archivo descargado
   - Pegar en carpeta correspondiente
   - Confirmar reemplazo

8. **Repetir para siguiente imagen**

---

## 🎯 CONFIGURACIONES ESPECÍFICAS

### Para fotos de servicios/trabajos (JPG):
```
Codec: MozJPEG
Quality: 85% ← IMPORTANTE: Buena calidad para profesional
Resize: Si > 1920px width
```

### Para logos/iconos (PNG):
```
Codec: OxiPNG
Effort: 3 (máxima compresión)
NO resize
```

### Para backgrounds/decorativas (JPG):
```
Quality: 75-80% ← Puede ser menor
```

---

## ⏱️ TIEMPO ESTIMADO

```
Por imagen: ~3-4 min
Total 9 imágenes: ~30-35 min

Breakdown:
- Abrir archivo: 10s
- Configurar: 30s
- Comprimir (automático): 5s
- Descargar: 10s
- Reemplazar: 20s
- Verificar: 30s
```

---

## ✅ CHECKLIST MIENTRAS OPTIMIZAS

```
□ software-development.jpg (18.21 MB → ~450 KB)
□ dba-engineer.jpg (17.39 MB → ~450 KB)
□ ios-developer.jpg (16.08 MB → ~450 KB)
□ iod-developer.jpg (16.08 MB → ~450 KB)
□ iam.jpg (14.10 MB → ~450 KB)
□ artificial-intelligence.jpg (10.03 MB → ~450 KB)
□ software-augmentation.jpg (9.13 MB → ~450 KB)
□ fullstack-engineer.jpg (6.96 MB → ~450 KB)
□ logo.png (1.34 MB → ~250 KB)
```

---

## 🆘 TROUBLESHOOTING

### Problema: "No puedo abrir squoosh.app"
```
Solución:
- Verificar internet
- Probar otro navegador (Chrome recomendado)
- O usar: https://tinypng.com (alternativa)
```

### Problema: "La imagen optimizada se ve mal"
```
Solución:
- Subir quality a 90%
- O usar 95% para esa imagen específica
- Compromiso entre calidad y tamaño
```

### Problema: "No encuentro la carpeta"
```
Solución:
PowerShell:
cd C:\Users\Felipe\WebstormProjects\cybevite\public\images\jobs
explorer .
```

### Problema: "Squoosh tarda mucho"
```
Solución:
- Las imágenes grandes (>15MB) tardan 10-30s
- Es normal
- Si > 1 min, recargar página
```

---

## 📊 VERIFICAR RESULTADOS

Después de optimizar todas, ejecutar:

```powershell
cd C:\Users\Felipe\WebstormProjects\cybevite

# Ver tamaño total ANTES
Get-ChildItem public/images-backup -Recurse *.jpg,*.png | Measure-Object -Property Length -Sum | Select-Object @{Name="MB";Expression={[math]::Round($_.Sum/1MB, 2)}}

# Ver tamaño total DESPUÉS
Get-ChildItem public/images -Recurse *.jpg,*.png | Measure-Object -Property Length -Sum | Select-Object @{Name="MB";Expression={[math]::Round($_.Sum/1MB, 2)}}
```

Resultado esperado:
```
ANTES:  ~120 MB
DESPUÉS: ~8-10 MB
AHORRO: ~110 MB (92%)
```

---

## 🚀 SIGUIENTE PASO

Después de optimizar, continuar con:
```
PASO 4: npm run client:build
PASO 5: npm run deploy:frontend
```

---

**¿Dudas?** Avísame cuando termines o si tienes algún problema.

