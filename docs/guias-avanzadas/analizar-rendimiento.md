# Analizar rendimiento

Las herramientas de rendimiento integradas en los navegadores permiten detectar cuellos de botella, optimizar interacciones y mejorar la experiencia del usuario. A continuación se detalla cómo utilizar los principales paneles y funciones para evaluar la eficiencia de tu sitio web.

---

### 🧪 **Performance Panel**

Este panel captura una sesión completa de ejecución del sitio para analizar qué consume más recursos y cómo impacta en la fluidez.

1. **Iniciar grabación**:
   - Abre la pestaña **Performance**.
   - Presiona el botón de grabación ⏺️.
   - Realiza interacciones críticas: desplazamiento (scroll), clics, navegación entre páginas.
   - Detén la grabación para ver el análisis detallado.

2. **Analizar resultados**:
   - **FPS (Frames Per Second)**: Apunta a mantenerlo por encima de 60 FPS.
   - **Main Thread**: Examina tareas largas (*Long Tasks*) que bloquean la interfaz.
   - **Timeline**: Muestra la carga de trabajo del CPU por función y evento.
   - **Flame Chart**: Permite rastrear funciones costosas o ciclos de renderizado innecesarios.
   - **Screenshots**: Captura la evolución visual del sitio durante la grabación.

> ⚠️ **Tip**: Las tareas que exceden los 50 ms se marcan como *long tasks*, y pueden provocar lags visibles.

---

### 🧭 **Auditorías con Lighthouse**

Lighthouse es una herramienta automatizada que genera reportes detallados para:

- **Rendimiento**
- **Accesibilidad**
- **Buenas prácticas**
- **SEO**
- **PWA (Progressive Web App)**

Pasos para usarlo:

1. Abre la pestaña **Lighthouse** en DevTools.
2. Elige las auditorías que deseas realizar (rendimiento, SEO, etc.).
3. Haz clic en “**Analyze page load**”.

Los resultados incluyen:

- **LCP (Largest Contentful Paint)**: Tiempo en mostrar el contenido más grande.
- **FID (First Input Delay)**: Tiempo desde la interacción del usuario hasta la respuesta.
- **CLS (Cumulative Layout Shift)**: Mide cambios visuales inesperados.

> 📋 **Tip**: Puedes exportar el informe como JSON o HTML para compartirlo o incluirlo en documentación técnica.

---

### 🧠 **Memory Profiling**

El análisis de memoria te ayuda a identificar fugas que podrían afectar el rendimiento con el tiempo.

1. Abre la pestaña **Memory**.
2. Usa la opción **Heap Snapshot** para capturar el estado de la memoria.
3. Filtra por `"Detached DOM nodes"` para detectar nodos desconectados que aún consumen memoria.

Otras herramientas útiles:

- **Allocation instrumentation**: Para ver el uso de memoria en tiempo real durante un período determinado.
- **Garbage Collection (GC)**: Puedes forzar la recolección manual para comparar antes/después de una interacción.

> 🐛 **Tip**: Una fuga común ocurre cuando referencias a nodos DOM se mantienen en variables globales innecesarias.

---

### 📊 **Web Vitals en tiempo real**

Activa el complemento [Web Vitals](https://web.dev/vitals/) para Chrome para observar métricas esenciales directamente desde la barra de herramientas:

- **LCP** (rendimiento visual inicial)
- **FID** (interacción del usuario)
- **CLS** (estabilidad visual)

También puedes integrarlo directamente al sitio con el siguiente script:

```html
<script src="https://unpkg.com/web-vitals"></script>
<script>
  webVitals.getCLS(console.log);
  webVitals.getFID(console.log);
  webVitals.getLCP(console.log);
</script>
```


### ✅ **Resumen**

| Herramienta | Función principal |
|------------|-------------------|
| **Performance** | Grabar y analizar interacciones del usuario |
| **Lighthouse** | Generar reportes automáticos de rendimiento y SEO |
| **Memory** | Detectar fugas y analizar uso de memoria |
| **Web Vitals** | Medir calidad de experiencia del usuario en tiempo real |

💡 **Recomendación**: Ejecuta estas herramientas en una sesión de incógnito sin extensiones para resultados más limpios.