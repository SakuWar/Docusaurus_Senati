# Depuración de JavaScript

Depurar código JavaScript es fundamental para identificar y corregir errores lógicos, de ejecución o de comportamiento en una aplicación web. Los navegadores modernos, como Chrome, Firefox y Edge, incluyen herramientas avanzadas en su panel de desarrollo (*DevTools*) que permiten pausar, examinar y analizar la ejecución del código paso a paso.

---

### **1. Puntos de interrupción (Breakpoints)**

Los **breakpoints** te permiten pausar la ejecución del código en una línea específica para analizar el estado del programa en ese momento. Esto es útil para detectar errores difíciles de replicar o comprender.

- **Agregar breakpoints**:
  - Ve al panel **Sources** y selecciona el archivo JS deseado.
  - Haz clic en el número de línea donde deseas pausar la ejecución.
  - La línea marcada con un círculo azul indica que el breakpoint está activo.

- **Tipos de breakpoints avanzados**:
  - **Conditional breakpoints**:
    - Clic derecho en una línea de código > *Add conditional breakpoint*.
    - Ingresa una condición (ej: `x > 10`). El código se pausará solo si la condición se cumple.
  - **Event listener breakpoints**:
    - En el panel derecho, busca *Event Listener Breakpoints*.
    - Marca eventos como `click`, `keydown`, `DOM mutation`, etc.
  - **XHR/fetch breakpoints**:
    - Se detiene cuando se realiza una solicitud de red con `XMLHttpRequest` o `fetch()`.

---

### **2. Ejecución paso a paso**

Una vez pausada la ejecución (ya sea por breakpoint o con `debugger;`), puedes usar los controles del *debugger* para avanzar en el código cuidadosamente.

- **Controles principales del debugger**:
  - ▶️ **Resume script execution**: Continúa la ejecución hasta el próximo breakpoint.
  - ⤵️ **Step over (F10)**: Ejecuta la siguiente línea sin entrar en funciones llamadas.
  - ⤴️ **Step into (F11)**: Entra en el cuerpo de una función invocada.
  - ⬆️ **Step out (Shift+F11)**: Finaliza la función actual y vuelve al contexto anterior.

- **Inspeccionar variables**:
  - En el panel derecho, dentro de **Scope**, puedes ver:
    - Variables locales.
    - Variables del contexto global.
    - Valores de argumentos pasados a funciones.
  - También puedes modificar valores manualmente para probar distintos escenarios.

---

### **3. Consola de depuración**

La consola no solo sirve para imprimir valores (`console.log`), también tiene herramientas para ayudarte a comprender el flujo del programa.

- **Uso de `debugger;`**:
  ```javascript
  function calcular() {
    let x = 5;
    debugger; // la ejecución se detendrá aquí
    let y = x * 2;
    return y;
  }

### Rastreo con `console.trace()`

```javascript
function lanzarError() { 
  console.trace("Rastro de ejecución"); 
}
```

### Accesos rápidos útiles

* `Ctrl + P`: Buscar y abrir cualquier archivo JS desde el panel *Sources*.
* `Ctrl + Shift + F`: Buscar texto o funciones en todos los archivos cargados.
* `Ctrl + O`: Ver todas las funciones disponibles en un archivo.

### ✅ Resumen

La depuración en JavaScript no se trata solo de `console.log`, sino de aprovechar herramientas profesionales:

* Usa breakpoints para pausar y analizar comportamiento.
* Aplica ejecución paso a paso para comprender flujos complejos.
* Explora variables en tiempo real y simula distintos escenarios.
* Combina la consola con funciones como `debugger;` y `console.trace()` para un rastreo detallado.

Dominar estas técnicas te permitirá encontrar y resolver errores con mayor rapidez y eficiencia, lo que se traduce en código más robusto y fácil de mantener.