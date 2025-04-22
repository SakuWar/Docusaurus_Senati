# Elementos no detectados

Cuando un elemento no aparece en el DOM o es difícil de inspeccionar, puede deberse a varias causas: renderizado dinámico, Shadow DOM, iframes u ocultamiento mediante estilos. Aquí se desglosan las causas y técnicas para detectarlos efectivamente.

---

## 🧠 1. Contenido generado dinámicamente

Los elementos creados con JavaScript tras la carga inicial pueden no estar presentes al abrir el panel **Elements**.

### 💡 Soluciones:

#### **DOM Breakpoints**  
- Haz clic derecho sobre el elemento padre ➜ **Break on > Subtree modifications**.  
- **DevTools** se detendrá automáticamente cuando se modifique el DOM.

#### **Depuración por tiempo o promesas**  

```js
setTimeout(() => {
  debugger;
  // Aquí se genera el DOM dinámico
}, 1000);
```

Usa `setTimeout(() => { debugger; }, 3000);` desde la consola para atrapar elementos generados con retardo.

---

## 🌑 2. Uso de Shadow DOM

Muchos frameworks modernos (como **Web Components**, **Lit**, **Angular** o librerías de diseño) encapsulan elementos dentro de un **Shadow Root**, aislando sus nodos del **DOM principal**.

### 💡 Soluciones:

**En DevTools:**  
- Ir a **Settings (⚙️) > Preferences**  
- Habilitar ✅ **Show user agent shadow DOM**

**Acceder desde la consola:**

```js
const shadowHost = document.querySelector('mi-componente');
const shadowRoot = shadowHost.shadowRoot;
console.log(shadowRoot.querySelector('elemento-interno'));
```

---

## 🧩 3. Elementos dentro de iframes

Los `iframe` cargan documentos **HTML** completamente independientes, con su propio contexto de **DOM** y **CSS**.

### 💡 Soluciones:

#### **Cambia el contexto de inspección:**  
- En el panel **Elements**, usa el menú desplegable (arriba a la izquierda del árbol de nodos) para seleccionar el iframe deseado.

#### **Accede desde consola:**  

```js
const iframe = document.querySelector('iframe');
const contenido = iframe.contentDocument || iframe.contentWindow.document;
console.log(contenido.querySelector('div'));
```

---

## 🎨 4. Estilos que ocultan contenido

Los elementos pueden existir, pero no ser visibles por reglas **CSS**.

### 💡 Verifica:

- `display: none`
- `visibility: hidden`
- `opacity: 0`
- `z-index`
- `position` fuera de pantalla.

**En consola:**  

```js
const elem = document.querySelector('#oculto');
elem.style.display = 'block'; // o visibility = 'visible'
```

**También puedes forzar la visualización:**  

```js
document.body.appendChild(document.querySelector('#elemento-oculto'));
```

---

## 🧰 Diagrama de flujo de diagnóstico

```mermaid
graph TD
  A[Elemento no visible] --> B{¿Es generado dinámicamente?}
  B -->|Sí| C[Usar DOM Breakpoints o debugger]
  B -->|No| D{¿Está en Shadow DOM?}
  D -->|Sí| E[Activar "Show user agent shadow DOM"]
  D -->|No| F{¿Está en iframe?}
  F -->|Sí| G[Inspeccionar contexto del iframe]
  F -->|No| H[Revisar estilos y reglas CSS]
```

---

## 🧪 Tips adicionales

- Usa `$$('selector')` en la consola para buscar múltiples nodos al instante.
- Utiliza `document.querySelectorAll('*')` y filtra elementos con `.hidden`, `.invisible`, etc.
- Herramientas como **Live Expression** (`DevTools > Sources`) permiten monitorear si un nodo existe en tiempo real.

---

## ✅ Resumen

| Causa potencial   | Solución recomendada                                     |
|------------------|----------------------------------------------------------|
| **JS dinámico**  | **DOM Breakpoints**, `debugger` en `setTimeout` o `.then()` |
| **Shadow DOM**   | Activar opción en **Settings**, usar `.shadowRoot`       |
| **iframes**      | Cambiar contexto en **DevTools**, acceder vía `contentDocument` |
| **Estilos CSS ocultos** | Modificar estilos manualmente desde consola         |