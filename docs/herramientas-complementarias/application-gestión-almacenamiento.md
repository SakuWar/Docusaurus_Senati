# Application: Gestión de almacenamiento

El panel **Application** de las DevTools permite visualizar y gestionar los diferentes tipos de almacenamiento y configuraciones persistentes que utiliza una aplicación web. Aquí puedes editar, borrar y monitorear datos como cookies, cachés y bases de datos locales.

---

## 📦 1. Almacenamiento Web (Web Storage)

Permite guardar datos del lado del cliente en formato clave-valor:

- **LocalStorage**
  - Persistente incluso tras cerrar el navegador.
  - Ideal para configuraciones de usuario.

- **SessionStorage**
  - Se borra al cerrar la pestaña.
  - Útil para datos de sesión temporal.

**Acciones desde DevTools:**

- Edita claves y valores directamente.
- Añade o elimina entradas con clic derecho.

```json
// Ejemplo: localStorage
{
  "user_prefs": {
    "dark_mode": true,
    "language": "es"
  }
}
```

> **🧪 Prueba rápida desde la consola:**
>
> ```js
> localStorage.setItem('theme', 'dark');
> console.log(localStorage.getItem('theme')); // 'dark'
> ```

---

## 📁 2. IndexedDB

Una base de datos NoSQL integrada para almacenamiento estructurado:

- Soporta objetos complejos y grandes volúmenes de datos.
- Utilizada por apps progresivas (PWAs) y sitios offline.

**🔍 Funcionalidades:**

- Explora bases de datos por nombre.
- Inspecciona tablas (object stores).
- Ejecuta comandos `getAll()`, `put()`, etc., desde la consola.

```js
// Obtener datos desde IndexedDB (ejemplo básico)
let dbRequest = indexedDB.open("MiBase", 1);

dbRequest.onsuccess = function(event) {
  let db = event.target.result;
  let tx = db.transaction("usuarios", "readonly");
  let store = tx.objectStore("usuarios");
  let getReq = store.getAll();

  getReq.onsuccess = () => console.log(getReq.result);
};
```

---

## 🍪 3. Cookies

Las cookies almacenan información relevante del navegador, como sesiones o preferencias.

📋 **Puedes ver:**

- Nombre, valor, dominio, ruta, fecha de expiración.

**Atributos de seguridad:**

- **Secure:** Solo se envía por HTTPS.
- **HttpOnly:** No accesible desde JavaScript.
- **SameSite:** Controla el envío entre sitios.

🔎 Utiliza filtros por dominio, ruta o nombre desde DevTools.

> **Consejo:** No guardes información sensible en cookies sin encriptar.

---

## 🛠️ 4. Caché y Service Workers

Gestión de contenido almacenado para uso offline o de alto rendimiento:

### Service Workers

- Scripts que interceptan peticiones de red.
- Permiten funcionamiento offline, sincronización en segundo plano y notificaciones push.
  
Desde el panel:
  
- Verifica su estado: Installing, Waiting, Activated.
- Usa el botón **Update** o **Unregister** para controlarlo manualmente.

### Cache Storage

- Explora recursos estáticos almacenados por Service Workers.
- Accede al contenido de la caché por nombre.

---

## 🧹 5. Borrar datos con Clear Storage

En la pestaña **Application > Clear storage** puedes eliminar:

- LocalStorage, SessionStorage.
- Cookies.
- Cache Storage.
- IndexedDB.
- Web SQL.

Es una herramienta muy útil para realizar pruebas limpias o depurar problemas de estado corrupto.

---

## 📊 Tabla comparativa de almacenamiento

| Tipo              | Persistencia            | Capacidad aprox.      | Accesible desde JS      | Seguridad extra     |
|-------------------|-------------------------|-----------------------|-------------------------|---------------------|
| **LocalStorage**  | Hasta cerrar sesión     | ~5-10 MB              | ✅ Sí                  | ❌                  |
| **SessionStorage**| Cierre de pestaña       | ~5-10 MB              | ✅ Sí                  | ❌                  |
| **Cookies**       | Configurable            | ~4 KB por cookie      | ✅/❌ (HttpOnly)       | ✅ Secure           |
| **IndexedDB**     | Persistente             | >50MB (o más)         | ✅ Sí                  | ✅ por dominio      |

---

## 💡 Consejos avanzados

- Utiliza **Application > Frames** para acceder a almacenamiento en iframes.
- Ejecuta `caches.keys()` en la consola para listar nombres de caché.
- Usa `chrome://serviceworker-internals` para la gestión avanzada de Service Workers.

> **Tip Final:** Utiliza **Application > Clear Storage > Clear site data** para eliminar todos los datos de un sitio web y empezar desde cero.