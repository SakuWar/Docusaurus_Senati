# Network: Análisis de solicitudes

El panel **Network** de DevTools es esencial para supervisar, depurar y optimizar el rendimiento de las solicitudes HTTP, los tiempos de carga y el comportamiento de red de cualquier aplicación web.

---

### 🔍 **1. Filtrado básico de solicitudes**

El volumen de solicitudes en una página puede ser abrumador. Para ayudarte a enfocarte:

- **Filtra por tipo de recurso** usando los botones:  
  - `XHR`: Llamadas AJAX o Fetch.
  - `JS`: Archivos JavaScript.
  - `CSS`: Hojas de estilo.
  - `Img`: Imágenes.
  - `Media`: Video/audio.

- **Búsqueda rápida**:
  - Presiona `Ctrl + F` o `Cmd + F` y escribe parte del nombre del archivo o URL.
  - Usa operadores como `status-code:404` o `domain:example.com` para filtrar aún más.

> 💡 **Pro Tip**: Haz clic derecho en cualquier encabezado de columna para mostrar/ocultar métricas adicionales (como Iniciador o Prioridad).

---

### 📊 **2. Métricas clave en la tabla**

Cada solicitud en la tabla de Network incluye columnas relevantes para el diagnóstico de rendimiento:

- **Status**: Código de respuesta HTTP (`200`, `301`, `404`, etc.).
- **Type**: Tipo de recurso (document, script, fetch, etc.).
- **Size**: Peso de la respuesta (comprimido y real).
- **Time**: Tiempo total y tiempos parciales:
  - **TTFB** (*Time to First Byte*): Tiempo hasta que el servidor responde.
  - **Content Download**: Tiempo que tarda en descargarse la respuesta.
- **Waterfall**: Gráfico de cascada que muestra visualmente:
  - El orden de carga de recursos.
  - Cuellos de botella.
  - Recursos bloqueantes (ej. CSS que retrasa el renderizado).

> ⏱️ **Consejo**: Pasa el cursor sobre cualquier barra del Waterfall para ver el desglose completo (espera, conexión, DNS, SSL, envío, TTFB, carga).

---

### ⚙️ **3. Opciones avanzadas**

Estas funciones mejoran el análisis durante sesiones prolongadas:

- **Preserve log**:  
  - Evita que se borren los registros de red al recargar o navegar.
  - Activa la opción desde el checkbox en la parte superior del panel.

- **Disable cache**:  
  - Simula una primera visita, ignorando cualquier recurso almacenado.
  - Muy útil para probar comportamientos sin caché (activar junto con "Preserve log").

- **Throttling de red**:  
  - Emula condiciones de red lentas (3G, offline, etc.).
  - Cambia desde el menú desplegable `No throttling`.

> 📡 **Tip**: Simula una red móvil con latencia desde el menú de dispositivos o activa el modo offline para probar respuestas a errores de red.

---

### 🧪 **4. Ejemplo práctico**

```javascript
// Desde la consola: monitorea eventos de carga de ventana
getEventListeners(window).load;
```

Este comando lista todos los manejadores de eventos load vinculados al objeto window, útil para entender qué scripts están pendientes al finalizar la carga.

### 🚀 **Flujo recomendado para depuración de red**

1. Abre el panel Network antes de recargar.
2. Activa Preserve log y Disable cache.
3. Presiona Ctrl + R para capturar todas las solicitudes desde el inicio.
4. Filtra por XHR para revisar llamadas a APIs.
5. Revisa el gráfico de cascada para detectar bloqueos o retrasos.
6. Haz clic en una solicitud para ver:
   - Headers: Encabezados HTTP.
   - Preview / Response: Respuesta en crudo o como objeto.
   - Timing: Desglose de tiempos de conexión.

### ✅ **Resumen visual**

| Herramienta/Función | Uso principal |
|---------------------|---------------|
| Preserve log | Conserva el historial entre recargas |
| Disable cache | Simula visitas sin caché para ver tiempos reales |
| Gráfico Waterfall | Visualiza la carga secuencial de recursos |
| Ctrl + F | Buscar solicitudes por nombre o tipo |
| TTFB & Size | Medir rendimiento del servidor y eficiencia del contenido |
| Throttling | Simular redes lentas para pruebas realistas |

🚦 **Sugerencia**: Usa extensiones como Lighthouse o Web Vitals junto con el panel Network para auditar rendimiento desde múltiples frentes.