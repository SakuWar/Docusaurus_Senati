# Inspeccionar HTML

El **Inspeccionar HTML** es una de las funcionalidades más potentes del Inspector de Elementos. Te permite explorar y modificar la estructura HTML de una página web en tiempo real. Esto es útil para depurar, entender cómo está construida una página o para realizar pruebas rápidas sin necesidad de modificar el código fuente de la página. Aquí te explicamos los pasos clave para manipular y explorar el árbol DOM (Document Object Model) de la página.

### 1. **Navegar por el árbol DOM**
El árbol DOM representa la estructura jerárquica de todos los elementos HTML de la página, y puedes explorarlo de manera interactiva en el panel *Elements*.

- **Expandir/Colapsar nodos**:  
  Puedes navegar por el árbol DOM utilizando las flechas **▶** y **▼** que aparecen junto a cada nodo. Estas flechas te permiten expandir o colapsar las etiquetas HTML y sus elementos hijos, lo que te facilita examinar elementos anidados sin tener que desplazarte por todo el documento.
  
- **Seleccionar etiquetas**:  
  Haz clic en cualquier etiqueta HTML dentro del árbol DOM para seleccionarla. Al hacer clic, el elemento correspondiente en la vista previa de la página se resaltará en azul, permitiéndote ver cómo se aplica el HTML en la interfaz visual. Esto es útil para identificar rápidamente qué parte de la página corresponde a cada elemento del árbol.

### 2. **Editar contenido**
El Inspector de Elementos te permite realizar cambios en el contenido HTML de manera interactiva, lo que es perfecto para probar modificaciones sin tener que editar el código original de la página. Puedes cambiar texto, atributos o incluso la estructura jerárquica de los elementos.

- **Editar texto o atributos**:  
  Si deseas cambiar el texto de un elemento, simplemente haz **doble clic** sobre el texto en el árbol DOM. Esto te permitirá editarlo directamente. Para guardar los cambios, presiona `Enter`. Lo mismo ocurre con los **atributos HTML** (como `class`, `id`, `src`, etc.); al hacer doble clic en un atributo, puedes modificar su valor.
  
- **Reordenar elementos**:  
  También puedes modificar la jerarquía de los elementos dentro del árbol DOM. Simplemente selecciona un nodo, luego **arrástralo** a una nueva posición dentro del árbol para reorganizar los elementos. Esto no solo cambia la estructura HTML, sino que también te permite ver cómo afectan esos cambios a la presentación visual de la página en tiempo real.

> 🔍 **Tip**: Si quieres expandir todos los hijos de un nodo a la vez, usa **`Alt + Click`** en Windows o **`Opt + Click`** en Mac sobre un nodo. Esto hará que se expandan automáticamente todos sus elementos hijos, lo que es muy útil para trabajar con estructuras complejas o cuando no quieres expandir manualmente cada subnodo.

---

## **Resumen**

Inspeccionar y editar el HTML de una página web con el Inspector de Elementos es un proceso sencillo pero poderoso. Te permite explorar la estructura del DOM, realizar pruebas rápidas y modificar contenido de manera inmediata, todo sin tener que recargar la página o modificar el código fuente. Es una herramienta imprescindible para desarrolladores y diseñadores web que quieren experimentar y depurar elementos en tiempo real.
