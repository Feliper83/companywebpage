# 🔐 Validación de Certificado SSL - cybevite.com

## 📋 Información del Certificado

**Certificate ARN:** `arn:aws:acm:us-east-1:524522256526:certificate/b4e7afea-45ad-4c28-8973-95a879a3429e`

**Fecha de solicitud:** 5 de diciembre, 2025

**Dominios incluidos:**
- cybevite.com
- www.cybevite.com
- api.cybevite.com

**Estado:** Pendiente de validación DNS

---

## ⚠️ ACCIÓN REQUERIDA: Agregar Registros DNS en Namecheap

Para validar que eres dueño del dominio, debes agregar estos **3 registros CNAME** en Namecheap:

### 📝 REGISTROS CNAME A AGREGAR:

#### **Registro 1: cybevite.com**
```
Tipo: CNAME Record
Host: _0bb81c689dbd9fd63ef37b688db5a7ed
Value: _42b2f5c7589f0a831a38a0a066386f62.jkddzztszm.acm-validations.aws.
TTL: Automatic (o 1 min)
```

#### **Registro 2: www.cybevite.com**
```
Tipo: CNAME Record
Host: _92c4d218e1be8f7de84a13ccf815f000.www
Value: _20b416d9a81fc62cc851578d0ac9e874.jkddzztszm.acm-validations.aws.
TTL: Automatic (o 1 min)
```

#### **Registro 3: api.cybevite.com**
```
Tipo: CNAME Record
Host: _78fc2692a44e6e1453c895645a13f167.api
Value: _4c1b5bb2cbd277cdf290adc67751193e.jkddzztszm.acm-validations.aws.
TTL: Automatic (o 1 min)
```

---

## 🎯 INSTRUCCIONES PASO A PASO - NAMECHEAP

### 1. Ir a Namecheap DNS Settings
   - URL: https://ap.www.namecheap.com/Domains/DomainControlPanel/cybevite.com/advancedns
   - (Ya deberías estar ahí)

### 2. Hacer clic en "ADD NEW RECORD" (botón rojo)

### 3. Para cada registro, agregar:

#### **REGISTRO 1:**
   - **Type:** CNAME Record
   - **Host:** `_0bb81c689dbd9fd63ef37b688db5a7ed`
   - **Value:** `_42b2f5c7589f0a831a38a0a066386f62.jkddzztszm.acm-validations.aws.`
   - **TTL:** Automatic
   - Clic en ✅ (guardar)

#### **REGISTRO 2:**
   - **Type:** CNAME Record
   - **Host:** `_92c4d218e1be8f7de84a13ccf815f000.www`
   - **Value:** `_20b416d9a81fc62cc851578d0ac9e874.jkddzztszm.acm-validations.aws.`
   - **TTL:** Automatic
   - Clic en ✅ (guardar)

#### **REGISTRO 3:**
   - **Type:** CNAME Record
   - **Host:** `_78fc2692a44e6e1453c895645a13f167.api`
   - **Value:** `_4c1b5bb2cbd277cdf290adc67751193e.jkddzztszm.acm-validations.aws.`
   - **TTL:** Automatic
   - Clic en ✅ (guardar)

### 4. Hacer clic en "SAVE ALL CHANGES" (guardar todo)

---

## ⏱️ TIEMPO DE VALIDACIÓN

- **DNS propagation:** 1-5 minutos (tu TTL es 1 min)
- **AWS validation:** 5-30 minutos después de DNS propagado
- **Total estimado:** 10-35 minutos

---

## ✅ VERIFICAR ESTADO DEL CERTIFICADO

### Comando para verificar:
```bash
aws acm describe-certificate \
  --certificate-arn arn:aws:acm:us-east-1:524522256526:certificate/b4e7afea-45ad-4c28-8973-95a879a3429e \
  --region us-east-1 \
  --query 'Certificate.Status' \
  --output text
```

### Estados posibles:
- `PENDING_VALIDATION` - Esperando validación DNS
- `ISSUED` - ✅ Certificado validado y listo para usar
- `FAILED` - Error en validación

---

## 🔍 IMPORTANTE SOBRE LOS HOSTS

**Namecheap automáticamente agrega ".cybevite.com" al final del Host.**

Por ejemplo:
- Si pones Host: `_0bb81c689dbd9fd63ef37b688db5a7ed`
- Namecheap crea: `_0bb81c689dbd9fd63ef37b688db5a7ed.cybevite.com`

**NO necesitas escribir el dominio completo en el campo Host.**

### Ejemplos:

| AWS te pide | Tú escribes en Host | Namecheap crea |
|-------------|---------------------|----------------|
| `_xxx.cybevite.com.` | `_xxx` | `_xxx.cybevite.com` |
| `_xxx.www.cybevite.com.` | `_xxx.www` | `_xxx.www.cybevite.com` |
| `_xxx.api.cybevite.com.` | `_xxx.api` | `_xxx.api.cybevite.com` |

---

## 📧 EMAIL PROTEGIDO

**Estos registros NO afectan tu email.** Son solo para validación SSL.

Tu email seguirá funcionando normalmente. ✅

---

## ❓ TROUBLESHOOTING

### Si el certificado no valida después de 30 min:

1. **Verificar registros CNAME en Namecheap:**
   - Asegúrate que los 3 registros estén guardados
   - Verifica que no haya espacios extra
   - El Value debe terminar con punto `.`

2. **Verificar DNS propagación:**
   ```bash
   nslookup -type=CNAME _0bb81c689dbd9fd63ef37b688db5a7ed.cybevite.com
   ```

3. **Esperar más tiempo:**
   - A veces AWS tarda hasta 1 hora en validar
   - Es normal, solo paciencia

---

## 🚀 PRÓXIMOS PASOS

Una vez el certificado esté `ISSUED`:

1. ✅ Configurar CloudFront con cybevite.com
2. ✅ Configurar API Gateway con api.cybevite.com
3. ✅ Actualizar registros DNS principales (ALIAS, CNAME www)
4. ✅ Actualizar código frontend
5. ✅ Testing completo

---

**Guardado:** 5 de diciembre, 2025

