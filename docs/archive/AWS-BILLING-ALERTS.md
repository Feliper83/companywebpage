# 🔔 AWS Billing Alerts - Cybevite

## 📊 Configuración Completa

**Fecha de configuración:** 4 de diciembre, 2025  
**Account ID:** 524522256526  
**Email de notificaciones:** felipe.feres9876@gmail.com

---

## ✅ Alarmas Configuradas

### 1. **CloudWatch Billing Alarm** - $25 USD
- **Tipo:** Umbral crítico
- **Acción:** Alerta cuando gastos > $25 USD
- **Propósito:** Protección máxima contra gastos excesivos
- **Región:** us-east-1
- **Status:** ✅ Activa
- **SNS Topic:** arn:aws:sns:us-east-1:524522256526:cybevite-billing-alerts

### 2. **AWS Budget #1** - $5 USD
- **Tipo:** Aviso temprano
- **Acción:** Alerta al 100% del presupuesto ($5)
- **Propósito:** Detectar gastos por encima de lo normal
- **Status:** ✅ Activo
- **Frecuencia:** Diaria

### 3. **AWS Budget #2** - $15 USD
- **Tipo:** Límite realista
- **Acción:** Alerta al 100% del presupuesto ($15)
- **Propósito:** Límite para tráfico alto normal
- **Status:** ✅ Activo
- **Frecuencia:** Diaria

### 4. **Cost Anomaly Detection**
- **Tipo:** Machine Learning (AWS automático)
- **Acción:** Detecta patrones anormales de gasto
- **Umbral:** $5 USD de anomalía
- **Status:** ✅ Activo
- **Monitor:** Default-Services-Monitor
- **Frecuencia:** Diaria

---

## 📧 Notificaciones

### Email: felipe.feres9876@gmail.com

**Recibirás emails cuando:**
- ✅ Gastos alcancen $5 USD (Aviso: revisa qué está pasando)
- ✅ Gastos alcancen $15 USD (Alerta: tráfico alto)
- ✅ Gastos superen $25 USD (CRÍTICO: revisar inmediatamente)
- ✅ AWS detecte patrones anormales de gasto (Anomalías)

---

## ⚠️ ACCIÓN REQUERIDA

### ❗ Confirmar Suscripción SNS

1. Revisa tu email: **felipe.feres9876@gmail.com**
2. Busca email de: **AWS Notifications (no-reply@sns.amazonaws.com)**
3. Haz clic en: **"Confirm subscription"**
4. Revisa también la carpeta de SPAM

**Sin confirmar, NO recibirás la alarma de $25 USD (CloudWatch)**

---

## 📊 Gastos Esperados

| Escenario | Visitas/Mes | Costo Estimado | Alarma Activada |
|-----------|-------------|----------------|-----------------|
| **Bajo** (actual) | 100-1,000 | $0.00 - $1.00 | Ninguna |
| **Moderado** | 5,000 | $0.26 - $1.00 | Ninguna |
| **Alto** | 50,000 | $2.60 - $3.50 | Ninguna |
| **Muy Alto** | 200,000 | $10.00 - $12.00 | ⚠️ Budget $5 y $15 |
| **Extremo** | 1M+ | $200+ | 🚨 TODAS |

---

## 🔍 Cómo Verificar Gastos Actuales

### Opción 1: AWS CLI
```bash
# Gastos del mes actual
aws ce get-cost-and-usage \
  --time-period Start=2025-12-01,End=2025-12-31 \
  --granularity MONTHLY \
  --metrics "BlendedCost"

# Por servicio
aws ce get-cost-and-usage \
  --time-period Start=2025-12-01,End=2025-12-31 \
  --granularity MONTHLY \
  --metrics "BlendedCost" \
  --group-by Type=DIMENSION,Key=SERVICE
```

### Opción 2: AWS Console
https://console.aws.amazon.com/billing/home#/

### Opción 3: Cost Explorer
https://console.aws.amazon.com/cost-management/home

---

## 🛠️ Gestionar Alarmas

### Ver Budgets
```bash
aws budgets describe-budgets --account-id 524522256526
```

### Ver CloudWatch Alarms
```bash
aws cloudwatch describe-alarms --region us-east-1
```

### Ver Anomaly Subscriptions
```bash
aws ce get-anomaly-subscriptions
```

### Modificar Umbral de Budget
```bash
aws budgets update-budget \
  --account-id 524522256526 \
  --new-budget file://new-budget-config.json
```

### Eliminar Budget
```bash
aws budgets delete-budget \
  --account-id 524522256526 \
  --budget-name "Cybevite-Monthly-Budget-5USD"
```

---

## 🚨 Qué Hacer Si Se Activa Una Alarma

### 1. **Alarma de $5 USD**
- ✅ Normal si tienes buen tráfico
- ✅ Revisa Cost Explorer para ver qué servicio
- ✅ Confirma que es tráfico legítimo

### 2. **Alarma de $15 USD**
- ⚠️ Tráfico alto o algo anormal
- ⚠️ Revisa CloudWatch Logs
- ⚠️ Verifica métricas de CloudFront y Lambda
- ⚠️ Busca patrones de bot/ataque

### 3. **Alarma de $25 USD (CRÍTICA)**
- 🚨 DETÉN TODO
- 🚨 Revisa qué servicio está consumiendo
- 🚨 Considera:
  - Deshabilitar CloudFront temporalmente
  - Poner Lambda en reserved concurrency = 0
  - Activar AWS WAF si es ataque
- 🚨 Contacta soporte AWS si necesitas

### 4. **Anomaly Detection**
- 🔍 AWS detectó comportamiento inusual
- 🔍 Revisa el email para detalles
- 🔍 Puede ser:
  - Spike de tráfico legítimo
  - Error en código (loop infinito)
  - Ataque DDoS
  - Servicio nuevo activado

---

## 💡 Optimizaciones de Costos

### Si los gastos son altos:

1. **CloudFront** (mayor riesgo)
   - Implementar rate limiting
   - Activar AWS WAF ($5/mes base)
   - Revisar cache hit ratio

2. **Lambda**
   - Optimizar código (reducir duración)
   - Reducir memoria si es posible
   - Implementar reserved concurrency

3. **CloudWatch Logs**
   - Reducir nivel de logging
   - Implementar log retention policies
   - Filtrar logs innecesarios

4. **S3**
   - Implementar lifecycle policies
   - Usar S3 Intelligent-Tiering

---

## 📞 Recursos de Ayuda

- **AWS Billing Dashboard:** https://console.aws.amazon.com/billing/
- **AWS Support:** https://console.aws.amazon.com/support/
- **AWS Cost Optimization:** https://aws.amazon.com/pricing/cost-optimization/
- **AWS Calculator:** https://calculator.aws/

---

## 🔐 Seguridad

**Importante:** Estas alarmas NO detienen servicios automáticamente, solo alertan.

Para protección adicional:
- Considera configurar AWS Service Control Policies (SCP)
- Implementar AWS IAM roles con límites
- Usar AWS Budgets Actions (puede detener recursos automáticamente)

---

**Última actualización:** 4 de diciembre, 2025

