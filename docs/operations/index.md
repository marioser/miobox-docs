---
prev: False
next:
  text: 'Soporte'
  link: '/soporte/index'
---

# Endpoints de la API Transport 

## Endpoints  

## Health

**Método:** `GET`  
**URL:** `http://transport.app.ultracem.local:3001/`  

**Descripción:**  
Obtiene una comprobación de vida para la API de consulta.

### Parámetros de la Solicitud

| Nombre | Tipo    | Requerido | Descripción                      |  
|--------|---------|-----------|----------------------------------|  
| N/a | N/a | No        | N/a |  

### Ejemplo de Solicitud 

```js

curl -X 'GET' \
  'http://transport.app.ultracem.local:3001/api/v1/health' \
  -H 'accept: */*'
```

### Respuesta  

``` 
Running!
```

| Códigos de Estado | Código Descripción |
| ----------------- | ------------------ |
| 200               | Éxito              |

---

## Consumo entre fechas

**Método:** `GET`  
**URL:** `http://transport.app.ultracem.local:3001/`  

**Descripción:**  
Obtiene una comprobación de vida para la API de consulta.

### Parámetros de la Solicitud

| Nombre | Tipo    | Requerido | Descripción                      |Ejemplo |  
|--------|---------|-----------|----------------------------------|-----------|
| start | string | Si        | Fecha y hora de inicio para la consulta |2024-11-16T14:00:00.000Z|
| stop | string | Si        | Fecha y hora de fin para la consulta |2024-11-16T15:00:00.000Z|
| windowPeriod | string | Si        | ventanas entre entrega de datos|1h|

### Ejemplo de Solicitud 

```js

curl -X 'GET' \
  'http://transport.app.ultracem.local:3001/api/v1/data/aggregate?start=2024-11-16T14%3A00%3A00.000Z&stop=2024-11-17T15%3A00%3A00.000Z&windowPeriod=1h' \
  -H 'accept: */*'

```

### Respuesta  

```json

[
  {
    "result": "",
    "table": "0",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "43505",
    "_field": "Count",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF100_CounterA"
  },
  {
    "result": "",
    "table": "1",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "43505",
    "_field": "Firts",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF100_CounterA"
  },
  {
    "result": "",
    "table": "2",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "0",
    "_field": "Last",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF100_CounterA"
  },
  {
    "result": "",
    "table": "3",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "2214",
    "_field": "Count",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF200_CounterA"
  },
  {
    "result": "",
    "table": "4",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "2214",
    "_field": "Firts",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF200_CounterA"
  },
  {
    "result": "",
    "table": "5",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "0",
    "_field": "Last",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF200_CounterA"
  },
  {
    "result": "",
    "table": "6",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "3522",
    "_field": "Count",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF300_CounterA"
  },
  {
    "result": "",
    "table": "7",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "3522",
    "_field": "Firts",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF300_CounterA"
  },
  {
    "result": "",
    "table": "8",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "0",
    "_field": "Last",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF300_CounterA"
  },
  {
    "result": "",
    "table": "9",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "8638",
    "_field": "Count",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF400_CounterA"
  },
  {
    "result": "",
    "table": "10",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "8638",
    "_field": "Firts",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF400_CounterA"
  },
  {
    "result": "",
    "table": "11",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "0",
    "_field": "Last",
    "_measurement": "mioboxComputed",
    "device": "CGA10WF400_CounterA"
  },
  {
    "result": "",
    "table": "12",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "29",
    "_field": "value",
    "_measurement": "mioboxComputed",
    "device": "EnergyL01"
  },
  {
    "result": "",
    "table": "13",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "28",
    "_field": "value",
    "_measurement": "mioboxComputed",
    "device": "EnergyL02"
  },
  {
    "result": "",
    "table": "14",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "24",
    "_field": "value",
    "_measurement": "mioboxComputed",
    "device": "EnergyL03"
  },
  {
    "result": "",
    "table": "15",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "10",
    "_field": "value",
    "_measurement": "mioboxComputed",
    "device": "EnergyPSC"
  },
  {
    "result": "",
    "table": "16",
    "_start": "2024-11-16T14:00:00Z",
    "_stop": "2024-11-16T15:00:00Z",
    "_time": "2024-11-16T15:00:00Z",
    "_value": "133",
    "_field": "value",
    "_measurement": "mioboxComputed",
    "device": "RecipeNumber",
    "name": "HE5800"
  }
]

```

| Códigos de Estado | Código Descripción |
| ----------------- | ------------------ |
| 200               | Éxito              |
| 404               | No encontrado      |
| 500               | Error Interno      |

---