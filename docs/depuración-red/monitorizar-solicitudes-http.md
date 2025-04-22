# Monitorizar solicitudes HTTP

Analizar el flujo de comunicación entre el cliente (navegador) y el servidor es clave para depurar errores, optimizar tiempos de carga y validar APIs. El panel **Network** de las DevTools proporciona todas las herramientas necesarias para este análisis.

---

## 🔎 1. Abrir y configurar el panel Network

- Abre DevTools (`F12` o `Ctrl + Shift + I`) y ve a la pestaña **Network**.
- Recarga la página con `Ctrl + R` / `Cmd + R` para capturar todas las solicitudes desde el arranque.
- Configura las siguientes opciones según necesidad:
  - ✅ *Preserve log* – mantiene el historial al navegar entre páginas.
  - ❌ *Disable cache* – fuerza la recarga de todos los recursos desde el servidor.

> **🧪 Consejo:** Abre el panel antes de realizar una acción para capturar todas las solicitudes generadas.

---

## 📁 2. Filtrado y agrupación por tipo de solicitud

- **Filtros por tipo de recurso:**
  - `XHR` → Solicitudes AJAX.
  - `Fetch` → API moderna basada en promesas.
  - `WS` → WebSockets (comunicación en tiempo real).
  - `JS`, `CSS`, `Img`, `Media` → Archivos estáticos.

- **Filtrado por texto:** Escribe partes de la URL o utiliza expresiones regulares.

```regex
status-code:200 method:GET domain:api.ejemplo.com
```

> **🧠 Atajo:** Usa `Ctrl + F` o `Cmd + F` para buscar en las solicitudes por nombre o contenido.

---

## 🧾 3. Inspección de solicitudes individuales

Haz clic sobre cualquier fila para ver detalles desglosados:

| Sección    | Qué contiene                                                                 |
|------------|------------------------------------------------------------------------------|
| **Headers**    | Cabeceras HTTP: método, URL, código de estado, user-agent, etc.           |
| **Payload**    | Datos enviados (en POST/PUT), incluyendo JSON o formularios.              |
| **Preview**    | Respuesta estructurada (ideal para JSON o HTML).                          |
| **Response**   | Texto plano del cuerpo de la respuesta.                                   |
| **Initiator**  | Línea de código o recurso que generó la solicitud.                        |
| **Timing**     | Fases de tiempo: DNS, TCP, SSL, TTFB, Content Download.                   |

### 🔧 Ejemplo de análisis en Headers:

```http
GET /usuarios HTTP/1.1
Host: api.miapp.com
Authorization: Bearer abc123token
```

> **🧪 Desde la consola:**

```js
fetch('https://api.miapp.com/usuarios')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🚦 4. Simulación de condiciones reales

### 📶 Throttling de red

Permite probar cómo se comporta tu app con conexiones lentas o intermitentes:

- **Opciones predeterminadas:**
  - Slow 3G
  - Fast 3G
  - Offline

🔧 Personaliza tu perfil desde **Network conditions > Throttling**.

```bash
# Emulación desde CLI con Lighthouse
lighthouse https://midominio.com --throttling.cpuSlowdownMultiplier=4
```

### 🗂 Desactivar caché

- Marca la casilla **Disable cache** en la parte superior del panel Network.
- Válido solo cuando DevTools está abierto.

---

## 🧰 5. Herramientas auxiliares

| Herramienta       | Uso                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------|
| **Copy as cURL**  | Replica solicitudes en Postman o terminal (curl, httpie).                                     |
| **Replay XHR**    | Reenvía una solicitud exactamente como fue capturada.                                       |
| **Save as HAR**   | Exporta toda la sesión en formato HAR para análisis externo.                                  |

### Ejemplo de "Copy as cURL":

```bash
curl 'https://api.miapp.com/usuarios' \
  -H 'Authorization: Bearer abc123token' \
  -H 'Accept: application/json'
```

---

## 📊 6. Visualización del rendimiento: Waterfall

El gráfico tipo cascada muestra:

- El orden en que se cargaron los recursos.
- El tiempo que tomó cada fase, entre las que se incluyen:
  - **DNS Lookup**
  - **TCP Handshake**
  - **SSL**
  - **Request Sent**
  - **Waiting (TTFB)**
  - **Content Download**

🔍 Es ideal para identificar cuellos de botella en recursos bloqueantes.

---

## 📌 Tips avanzados

- Usa la pestaña **Timing** para analizar si hay esperas largas en TTFB.
- Presiona `Esc` para abrir la Consola inferior y combinar **Network** + **Console**.
- Evalúa respuestas de API directamente con `console.table(response)`.

> **🔍 Tip final:** Utiliza la opción *Record network log* (círculo rojo en la parte superior izquierda) para grabar el flujo completo y compartirlo con tu equipo de desarrollo o soporte técnico.