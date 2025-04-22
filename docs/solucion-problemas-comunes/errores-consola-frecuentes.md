# Errores de consola frecuentes

Los errores en la consola de JavaScript ofrecen pistas valiosas para depurar problemas de ejecución, lógica y comunicación con el servidor. A continuación, se presenta una guía para interpretar y resolver los errores más comunes, con ejemplos y consejos prácticos.

---

## 🧾 Tabla de errores típicos y soluciones

| 🧨 **Error**                      | 🛠️ **Causa común**                            | ✅ **Solución sugerida**                     |
|----------------------------------|---------------------------------------------|----------------------------------------------|
| `404 (Not Found)`               | Recurso no encontrado en el servidor        | Verifica la ruta del archivo en Network/Preview |
| `403 (Forbidden)`               | Acceso denegado por permisos o tokens       | Asegúrate de tener permisos/cabeceras válidas |
| `CORS policy blocked`           | Falta de cabeceras `Access-Control-*`       | Configura CORS en el backend o usa un proxy  |
| `net::ERR_FAILED`               | Fallo en conexión o fetch                   | Verifica la URL, red o existencia del recurso |
| `undefined is not a function`   | Método llamado no existe o no está disponible | Asegúrate de que esté definido correctamente  |
| `Uncaught ReferenceError`       | Variable no definida o fuera de alcance     | Usa `let`/`const`/`var` correctamente        |
| `Uncaught TypeError: null is not...` | Intento de acceder a propiedad de `null` | Verifica si el elemento existe antes de usarlo |
| `SyntaxError`                   | Error de sintaxis (falta `}`, `)`, `;`, etc.) | Revisa cuidadosamente la estructura del código |

---

## 🧪 Ejemplo de captura manual de errores

```javascript
try {
  miFuncionNoDefinida(); // Esto generará ReferenceError
} catch (error) {
  console.error("¡Se produjo un error!", error.message);
}
```

✅ **Mejor práctica:** Usa `try/catch` en llamadas críticas como peticiones `fetch()` o interacción con APIs externas.

---

## 🔍 Depuración visual con DevTools

- **Panel Sources** → Activa 🔘 `Pause on exceptions` para detener el código justo cuando ocurre un error.
- Usa **breakpoints** en líneas específicas para seguir paso a paso la ejecución.
- **Panel Network** para comprobar si falló una solicitud de red relacionada con el error.

---

## 📌 Ejemplos con errores reales

### ❌ **Uncaught TypeError: Cannot read property 'value' of null**

```js
// Causa: El elemento no existe en el DOM
document.getElementById("correo").value;
```

✅ **Solución:**

```js
const input = document.getElementById("correo");
if (input) {
  console.log(input.value);
}
```

### ❌ **Access to fetch at '...' from origin '...' has been blocked by CORS policy**

🌐 Significa que el servidor no está aceptando solicitudes de otro dominio.

✅ **Soluciones:**

En el backend, permite el origen:

```http
Access-Control-Allow-Origin: *
```

Si no puedes modificar el servidor, usa un proxy (por ejemplo, con **Vite**, **Webpack** o extensiones de navegador).

---

## 🧰 Herramientas útiles

- `console.error()`: Para registrar errores específicos manualmente.
- `debugger`: Inserta un punto de interrupción desde el código JS.
- `console.trace()`: Muestra el rastro de llamadas para saber de dónde vino un error.
- `window.onerror` / `window.addEventListener('error')`: Captura errores globales.

---

## 🔁 Buenas prácticas para evitar errores

| ⚙️ **Técnica**              | 💡 **Ejemplo**                                  |
|---------------------------|-----------------------------------------------|
| **Validación previa**      | `if (miVar && typeof miVar === 'function')`  |
| **Comprobación de DOM**    | `if (document.querySelector("#id"))`         |
| **Uso de optional chaining** | `obj?.propiedad?.subpropiedad`             |
| **Linter activo (ESLint)** | Detecta errores antes de ejecutar           |
| **TypeScript o JSDoc**    | Previene errores de tipos                    |

---

## 🧪 Tip extra: medir tiempos de ejecución

```js
// Medir tiempo de ejecución de funciones
console.time("miFuncion");
miFuncion();
console.timeEnd("miFuncion");
```

---

## 📌 Conclusión

Los errores de consola son aliados en la depuración. Interpretarlos correctamente permite mejorar la estabilidad y experiencia del usuario.  
Combina su análisis con **DevTools**, validación defensiva y herramientas de calidad de código para evitar errores en producción.