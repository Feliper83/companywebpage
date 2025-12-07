# 🌐 Cambios DNS en Namecheap - cybevite.com

## ✅ COMPLETADO HASTA AHORA:

- [x] Certificado SSL validado
- [x] CloudFront configurado con cybevite.com
- [x] API Gateway configurado con api.cybevite.com

---

## 📋 CAMBIOS DNS REQUERIDOS

### ⚠️ IMPORTANTE - PROTECCIÓN DE EMAIL:
**NO toques estos registros (para tu email):**
- Registros MX
- Registros TXT (DKIM, SPF)
- Cualquier CNAME relacionado con email

---

### 🔄 MODIFICAR Registros Existentes:

#### 1. **ALIAS Record (@)** - Para cybevite.com
```
ANTES:
Type: ALIAS Record
Host: @
Value: a6nmecci3i1yvf151rd3ywyksm.beta.supersonic.ai
TTL: 1 min

DESPUÉS:
Type: CNAME Record
Host: @
Value: d2er6xtt8dlmb6.cloudfront.net
TTL: 1 min (o Automatic)
```

**NOTA:** Si Namecheap no permite CNAME en @, usa:
- **Option A:** URL Redirect de @ a www.cybevite.com
- **Option B:** ALIAS Record apuntando a d2er6xtt8dlmb6.cloudfront.net

#### 2. **CNAME Record (www)** - Para www.cybevite.com
```
ANTES:
Type: CNAME Record
Host: www
Value: a6nmecci3i1yvf151rd3ywyksm.beta.supersonic.ai
TTL: 1 min

DESPUÉS:
Type: CNAME Record
Host: www
Value: d2er6xtt8dlmb6.cloudfront.net
TTL: 1 min (o Automatic)
```

---

### ➕ AGREGAR Nuevo Registro:

#### 3. **CNAME Record (api)** - Para api.cybevite.com
```
Type: CNAME Record
Host: api
Value: d-1a3ekfi588.execute-api.us-east-1.amazonaws.com
TTL: 1 min (o Automatic)
```

---

## 🎯 RESUMEN DE TARGETS DNS:

| Dominio | Type | Host | Value |
|---------|------|------|-------|
| **cybevite.com** | CNAME o ALIAS | @ | `d2er6xtt8dlmb6.cloudfront.net` |
| **www.cybevite.com** | CNAME | www | `d2er6xtt8dlmb6.cloudfront.net` |
| **api.cybevite.com** | CNAME | api | `d-1a3ekfi588.execute-api.us-east-1.amazonaws.com` |

---

## 📝 INSTRUCCIONES PASO A PASO:

### 1. Ir a Namecheap DNS Settings
   - URL: https://ap.www.namecheap.com/Domains/DomainControlPanel/cybevite.com/advancedns
   
### 2. Modificar ALIAS Record (@):
   - Haz clic en el icono de editar (✏️) del registro ALIAS @
   - Cambia Value a: `d2er6xtt8dlmb6.cloudfront.net`
   - Clic en ✅ (guardar)
   
### 3. Modificar CNAME Record (www):
   - Haz clic en el icono de editar (✏️) del registro CNAME www
   - Cambia Value a: `d2er6xtt8dlmb6.cloudfront.net`
   - Clic en ✅ (guardar)
   
### 4. Agregar CNAME Record (api):
   - Haz clic en "ADD NEW RECORD" (botón rojo)
   - Type: CNAME Record
   - Host: `api`
   - Value: `d-1a3ekfi588.execute-api.us-east-1.amazonaws.com`
   - TTL: Automatic
   - Clic en ✅ (guardar)
   
### 5. Guardar todos los cambios:
   - Haz clic en "SAVE ALL CHANGES"
   
---

## ⏱️ TIEMPO DE PROPAGACIÓN:

- **DNS TTL actual:** 1 minuto
- **Propagación esperada:** 1-5 minutos
- **Global propagation:** 15-30 minutos máximo

---

## ✅ VERIFICAR CAMBIOS:

### Verificar DNS (después de 5 minutos):

```powershell
# Verificar cybevite.com
nslookup cybevite.com

# Verificar www.cybevite.com
nslookup www.cybevite.com

# Verificar api.cybevite.com
nslookup api.cybevite.com
```

### Probar en navegador (después de 10 minutos):

```
https://cybevite.com          → Debería cargar tu sitio (con HTTPS)
https://www.cybevite.com      → Debería cargar tu sitio (con HTTPS)
https://api.cybevite.com/api/languages → Debería devolver JSON
```

---

## 🔒 SEGURIDAD:

- ✅ HTTPS automático (certificado SSL configurado)
- ✅ Redirect HTTP → HTTPS (CloudFront configurado)
- ✅ TLS 1.2+ (seguridad moderna)

---

## 📧 EMAIL:

**Tu email de cybevite.com seguirá funcionando normalmente.**

Estos cambios solo afectan el sitio web, no el email.

---

## ⚠️ TROUBLESHOOTING:

### Si cybevite.com no carga después de 30 min:
1. Verifica que guardaste todos los cambios en Namecheap
2. Verifica que los valores no tienen espacios extra
3. Los valores deben terminar exactamente como se muestran arriba
4. Espera 1 hora (a veces DNS tarda más)

### Si el email deja de funcionar:
1. Verifica que NO modificaste registros MX o TXT
2. Contacta soporte de Namecheap
3. Puedes revertir los cambios inmediatamente

---

**Fecha:** 5 de diciembre, 2025  
**TTL:** 1 minuto (cambios rápidos)

