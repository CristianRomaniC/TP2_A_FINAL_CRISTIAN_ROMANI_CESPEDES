# Prueba de Endpoints

## URL Base

```
http://localhost:8000
```

---

# 1. Registrar un sensor

**Método:** `POST`

**URL**

```
http://localhost:8000/lecturas
```

### Body

```json
{
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 25,
    "timestamp": "2025-12-01T18:30:00Z"
}
```

### Resultado esperado

```json
{
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 25,
    "timestamp": "2025-12-01T18:30:00Z",
    "alerta": null
}
```

---

# 2. Obtener sensores

**Método:** `GET`

**URL**

```
http://localhost:8000/sensores
```

---

# 3. Actualizar el sensor y generar una alerta

**Método:** `POST`

**URL**

```
http://localhost:8000/lecturas
```

### Body

```json
{
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 40,
    "timestamp": "2025-12-01T19:00:00Z"
}
```

### Resultado esperado

```json
{
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 40,
    "timestamp": "2025-12-01T19:00:00Z",
    "alerta": "TEMPERATURA alta"
}
```

---

# 4. Obtener alertas

**Método:** `GET`

**URL**

```
http://localhost:8000/alertas
```

---

# 5. Validación

**Método:** `POST`

**URL**

```
http://localhost:8000/lecturas
```

### Body

```json
{
    "id": "ABC",
    "tipo": "TEMPERATURA",
    "valor": 40,
    "timestamp": "2025-12-01T19:00:00Z"
}
```

### Resultado esperado

**HTTP 400**

```json
{
    "errorMsg": "El id debe tener exactamente 8 caracteres alfanuméricos."
}
```

---

# 6. Ruta inexistente

**Método:** `GET`

**URL**

```
http://localhost:8000/pepito
```

### Resultado esperado

**HTTP 404**

```json
{
    "errorMsg": "Ruta no encontrada."
}