# Interfaz básica

La interfaz del Inspector de Elementos es una poderosa herramienta visual que te permite explorar, modificar y depurar el código de una página web en tiempo real. Está organizada en varios paneles, cada uno de los cuales se centra en una función específica para facilitar la inspección y modificación del contenido. A continuación, se detallan los paneles y zonas más importantes que puedes encontrar en el Inspector:

### 1. **Panel Elements/Inspector**  
Este es uno de los paneles más esenciales y se encuentra generalmente en la parte izquierda de la interfaz del Inspector. Este panel muestra el **árbol DOM (Document Object Model)** de la página web que estás inspeccionando. Aquí podrás ver la estructura HTML completa, representada como una jerarquía de elementos anidados, lo que te permitirá explorar y entender cómo está organizada la página.

- **Expandir/Colapsar nodos**: Puedes hacer clic sobre las flechas al lado de cada etiqueta HTML para expandir o colapsar el contenido de un nodo, lo que facilita la navegación en páginas grandes o complejas.
- **Edición en tiempo real**: Puedes hacer doble clic sobre cualquier etiqueta o atributo HTML en el árbol para editarlos directamente. Esto es útil para realizar pruebas rápidas de cambios sin necesidad de modificar el archivo fuente.

### 2. **Panel Styles**  
Este panel muestra y permite modificar los **estilos CSS** aplicados al elemento seleccionado en el panel de elementos. Los estilos se dividen en reglas CSS que se aplican al elemento específico, y puedes ver cómo las reglas se heredan de otros elementos o se aplican a pseudoclases.  

- **Reglas heredadas**: Puedes ver las reglas que se aplican por herencia desde elementos superiores en el árbol DOM. Esto es útil para comprender cómo las propiedades de un elemento se ven afectadas por sus ancestros.
- **Pseudoclases**: El Inspector permite trabajar con pseudoclases como `:hover`, `:active` o `:focus`, que son clave para estilizar el comportamiento interactivo de los elementos (por ejemplo, cuando un usuario pasa el mouse por encima de un botón). Estas pseudoclases se pueden activar para simular su comportamiento sin necesidad de interactuar realmente con la página.
- **Deshabilitar propiedades**: Puedes deshabilitar temporalmente una propiedad CSS haciendo clic en la casilla junto a la regla. Esto es útil para ver cómo cambia el diseño de la página al eliminar ciertas reglas sin tener que borrarlas por completo.

### 3. **Panel Console**  
La consola es una herramienta vital para desarrolladores que permite interactuar con JavaScript en tiempo real.  
- **Mensajes de error y advertencias**: La consola muestra errores de JavaScript y advertencias relacionadas con el comportamiento de la página, lo que facilita la depuración.
- **Ejecutar comandos JavaScript**: Puedes escribir y ejecutar comandos directamente en la consola para probar funciones, manipular elementos del DOM, y depurar el código JavaScript en tiempo real.

---

### **Zonas Destacadas del Inspector**

Además de los paneles descritos anteriormente, la interfaz del Inspector incluye varias zonas destacadas que proporcionan información visual y herramientas interactivas:

### **Vista HTML/CSS**
- En esta zona, se muestra la jerarquía de elementos HTML a la izquierda y los estilos CSS aplicados a cada elemento en la parte derecha. Esta división te permite ver rápidamente cómo se estructura la página y cómo los estilos afectan la apariencia de los elementos. También podrás realizar ediciones rápidas en ambas vistas.

### **Box Model**
- El **Box Model** es una representación visual del **modelo de caja CSS**, que incluye los márgenes, bordes, padding (relleno) y el contenido real de un elemento. Esta herramienta es útil para analizar la distribución del espacio alrededor de un elemento y verificar cómo se aplican las propiedades de margen y padding.
  - **Márgenes**: Espacio fuera del borde del elemento.
  - **Bordes**: Líneas alrededor del elemento.
  - **Padding**: Espacio entre el borde y el contenido del elemento.
  - **Contenido**: El área donde se visualiza el contenido del elemento.

### **Device Toolbar**
- La **Device Toolbar** es una herramienta esencial para comprobar cómo se ve una página web en diferentes dispositivos, como móviles y tabletas. Esta opción permite simular la visualización de la página en una variedad de tamaños y resoluciones de pantalla.
  - **Icono de móvil/tablet**: Permite alternar entre vista de escritorio y vista móvil, lo que te ayudará a asegurarte de que el diseño de la página sea **responsivo**.
  - **Simulación de interacciones táctiles**: Puedes simular eventos táctiles, como el desplazamiento, el zoom y la selección de texto, para ver cómo se comporta la página en dispositivos con pantallas táctiles.

---

### **Resumen y Consejos Adicionales**

La interfaz del Inspector está diseñada para ser intuitiva y extremadamente útil para depurar y desarrollar páginas web. Dominar el uso de estas herramientas te permitirá trabajar de manera más eficiente y comprender mejor cómo tu código afecta el comportamiento y la apariencia de una página en vivo. Además de los paneles mencionados, el Inspector de Elementos ofrece varias funcionalidades avanzadas como la posibilidad de analizar el rendimiento de la página, verificar las solicitudes de red y optimizar el código JavaScript.
