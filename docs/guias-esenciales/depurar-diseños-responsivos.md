# Depurar diseños responsivos

A medida que los dispositivos móviles y las pantallas de diferentes tamaños se han convertido en el estándar, es esencial que los sitios web sean **responsivos**, es decir, que se adapten correctamente a diversas resoluciones y dispositivos. El **Inspector de Elementos** proporciona herramientas clave para depurar y garantizar que el diseño se vea bien en cualquier tamaño de pantalla.

---

### **Flujo para garantizar adaptabilidad en dispositivos**

El flujo para depurar y ajustar diseños responsivos implica simular diferentes dispositivos y condiciones, asegurando que los estilos CSS sean apropiados para cada tipo de pantalla.

- **Activar Device Toolbar**:  
  Una de las funciones más útiles es la **Device Toolbar**, que te permite simular cómo se verá tu página en varios dispositivos móviles y tabletas. Para activarla:

  - **Combinaciones de teclas**:  
    - En **Windows/Linux**: `Ctrl + Shift + M`  
    - En **Mac**: `Cmd + Shift + M`  

  - **Seleccionar dispositivos predefinidos**:  
    Puedes seleccionar dispositivos predefinidos como *iPhone*, *iPad*, *Galaxy*, entre otros.

  - **Definir dimensiones personalizadas**:  
    Ingresa dimensiones manualmente para probar resoluciones no estándar.

---

### **Simular condiciones**

- **Throttling de red**:  
  Limita la velocidad de conexión para simular redes lentas (3G, LTE).  
  - Haz clic en el menú desplegable **Network** en la Device Toolbar.  
  - Selecciona una opción como “Slow 3G” o “Fast 3G”.

- **Orientación de pantalla**:  
  Cambia entre vista **vertical** y **horizontal** usando el ícono de rotación (📱↔️).  
  Esto permite verificar el comportamiento del diseño al rotar el dispositivo.

---

### **Inspeccionar Media Queries**

Las **media queries** son reglas CSS que aplican estilos condicionalmente según el tamaño del viewport.

- **Pestaña *Media* en el panel Elements**:  
  Muestra las media queries activas en el elemento inspeccionado.

- **Breakpoints visuales**:  
  - En la parte superior de la Device Toolbar, se muestran los puntos de quiebre detectados.  
  - Haz clic en ellos para cambiar entre resoluciones y observar cómo responde el diseño.

---

### **Resumen**

El uso de herramientas de depuración responsiva es fundamental para garantizar que tu diseño se vea bien en todos los dispositivos. Activando la **Device Toolbar**, simulando **condiciones de red y orientación**, e inspeccionando **media queries** podrás realizar pruebas rápidas, identificar errores visuales y hacer ajustes precisos en tiempo real. Estas prácticas aseguran una experiencia de usuario fluida y profesional en cualquier dispositivo.