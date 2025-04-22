# Uso de la consola integrada

La consola de desarrollo del navegador no es solo para registrar valores con `console.log()`; es una poderosa herramienta para inspeccionar datos, probar código, depurar errores y experimentar en tiempo real. Aprovecharla al máximo puede acelerar tu flujo de trabajo como desarrollador frontend o full-stack.

---

### **Comandos esenciales**

- `console.log(valor)`:  
  Imprime cualquier tipo de valor (número, string, objeto, array, etc.).  
  ```javascript
  console.log("Hola mundo");
  console.log({ nombre: "Ana", edad: 30 });
  ```

- `console.table(objeto/array)`:
  Muestra los datos en una tabla estructurada, ideal para visualizar arreglos de objetos.
  ```javascript
  const usuarios = [
    { nombre: "Luis", edad: 28 },
    { nombre: "María", edad: 35 }
  ];
  console.table(usuarios);
  ```

- `$0, $1...$4`:
  Accede a los últimos 5 elementos seleccionados en el inspector.
  - `$0` es el elemento actualmente inspeccionado.
  - `$1` es el elemento anterior, y así sucesivamente.

### **Métodos útiles**

- `monitorEvents(elemento, [tipo])`:
  Monitorea los eventos de un elemento. Puedes especificar el tipo (click, keydown, resize, etc.).
  ```javascript
  monitorEvents(document.body, 'click');
  ```

- `unmonitorEvents(elemento, [tipo])`:
  Detiene la monitorización de eventos.
  ```javascript
  unmonitorEvents(document.body, 'click');
  ```

- `copy(valor)`:
  Copia cualquier dato (objeto, string, HTML) al portapapeles.
  ```javascript
  copy(document.title);
  copy($0); // copia el elemento seleccionado en el DOM
  ```

- `clear()`:
  Limpia el contenido actual de la consola.

- `dir(objeto)`:
  Muestra una vista interactiva del objeto, útil para explorar propiedades.
  ```javascript
  dir(document.body);
  ```

### **Expresiones en vivo (Live Expressions)**

Puedes fijar variables o expresiones para monitorear su valor en tiempo real:

1. Haz clic en el ícono 👁️ en la consola (en la parte superior derecha).
2. Escribe una expresión como: `window.scrollY`, `miVariable`, `new Date().toLocaleTimeString()`.
3. Verás su valor actualizarse en directo sin necesidad de ejecutar código manualmente.

### **Estilizar mensajes en consola**

Puedes aplicar estilos visuales a los mensajes usando `%c` y una cadena de estilos CSS:

```javascript
console.log('%c¡Atención!', 'color: red; font-size: 20px; font-weight: bold;');
```

Esto es útil para destacar advertencias o secciones específicas en el flujo de logs.

### **Otras utilidades interesantes**

- `console.group()` y `console.groupEnd()`: Agrupa logs relacionados en una estructura colapsable.
  ```javascript
  console.group("Datos de usuario");
  console.log("Nombre: Ana");
  console.log("Edad: 29");
  console.groupEnd();
  ```

- `console.time()` y `console.timeEnd()`: Mide el tiempo de ejecución de un bloque de código.
  ```javascript
  console.time("Proceso");
  // ...código...
  console.timeEnd("Proceso");
  ```

### ✅ **Resumen**

El dominio de la consola te permite:
- Probar funciones y fragmentos de código al instante.
- Monitorear eventos, variables y expresiones dinámicamente.
- Analizar objetos con mejor formato visual (tablas, inspección).
- Copiar contenido útil al portapapeles para reutilizarlo.

💡 **Tip**: Puedes guardar cualquier resultado con clic derecho > Store as Global Variable, lo que lo asigna a una variable como `temp1`, para seguir manipulándolo.