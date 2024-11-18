---
prev: False
next:
  text: 'Generar Ticker'
  link: 'https://sgsolucionesing.atlassian.net/servicedesk/customer/portal/3'
---

# Documentación de Endpoints de la API  

## Endpoints  

### Obtener Usuarios  

**Método:** `GET`  
**URL:** `http://transport.app.ultracem.local:3001/`  

**Descripción:**  
Obtiene una comprobación de vida para la API de consulta. 

#### Parámetros de la Solicitud  

| Nombre | Tipo    | Requerido | Descripción                      |  
|--------|---------|-----------|----------------------------------|  
| N/a | N/a | No        | N/a |  

#### Ejemplo de Solicitud  
```

curl -X 'GET' \
  'http://transport.app.ultracem.local:3001/api/v1/health' \
  -H 'accept: */*'
```

#### Respuesta  

```json  
{  
  "data": [  
    {  
      "id": "123",  
      "name": "Juan Pérez",  
      "email": "juan.perez@example.com"  
    }  
  ]  
}  
```

| Códigos de Estado | Código Descripción |
| ----------------- | ------------------ |
| 200               | Éxito              |
| 404               | No encontrado      |
|                   |                    |