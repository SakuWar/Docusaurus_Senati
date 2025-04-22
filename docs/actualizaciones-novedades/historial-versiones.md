# Historial de versiones de DevTools

Evolución de las funcionalidades del Inspector de Elementos a través de versiones clave de Google Chrome. Estas actualizaciones han transformado la experiencia de depuración y optimización web.

| **Versión (Chrome)** | **Fecha** | **Novedad destacada** | **Impacto en desarrollo** |
|----------------------|-----------|------------------------|---------------------------|
| **120** | Nov 2023 | Soporte mejorado para *CSS Grid debugging* | Visualización más clara de líneas, áreas y nombres de grid. Facilita la alineación de contenido complejo. |
| **115** | Ago 2023 | Integración de *Core Web Vitals* en el panel *Performance* | Puedes visualizar métricas como LCP, FID y CLS directamente en la línea de tiempo. Ideal para auditorías. |
| **110** | May 2023 | *Recorder panel* actualizado con exportación a Puppeteer | Genera flujos de prueba automatizados desde clics reales sin escribir código. |
| **105** | Mar 2023 | Autocompletado inteligente en consola | Muestra propiedades válidas en tiempo real, lo que acelera la escritura y evita errores. |
| **102** | Ene 2023 | Mejora del *Issues tab* | Agrupa advertencias y errores por tipo (CORS, COEP, etc.). Más fácil de depurar errores comunes. |
| **98** | Oct 2022 | Panel *Layers* para visualización 3D del árbol de renderizado | Ayuda a entender cómo se apilan elementos, ideal para animaciones y efectos complejos. |
| **96** | Sep 2022 | Soporte para *source maps* en WebAssembly | Puedes depurar WASM como si fuera JS, mapeando al código fuente original. |
| **89** | May 2021 | Inclusión del panel *Rendering* | Herramienta para simular condiciones como visibilidad forzada de capas, dark mode, o emulación de preferencias del usuario. |
| **84** | Jul 2020 | Lanzamiento del panel *Lighthouse* dentro de DevTools | Auditorías integradas de rendimiento, accesibilidad, SEO, etc. sin salir del navegador. |

## 📌 Cambios destacados a lo largo del tiempo

### 🎯 Nuevas formas de depurar
* **Panel Recorder**: simula interacciones y convierte clics en scripts reutilizables.
* **Depuración visual de CSS Grid y Flexbox**: contornos, nombres de líneas, y superposición de áreas.

### ⚡ Rendimiento en foco
* **Web Vitals integrados**: métricas clave como LCP y CLS están disponibles en el panel *Performance* para análisis más rápido.
* **Carga condicional de módulos DevTools**: se ha optimizado el propio rendimiento de las herramientas.

### 🔍 Accesibilidad y SEO
* **Panel Lighthouse** cada vez más completo: integración de ARIA, colores accesibles, verificación de etiquetas ALT, y más.

### 🧪 Compatibilidad avanzada
* **Source maps para lenguajes compilados** como TypeScript, SCSS, e incluso WebAssembly, permiten una experiencia de depuración moderna.

## 📘 Recursos útiles
* 🔄 **Changelog completo de DevTools**: Lista oficial de actualizaciones versión por versión.
* 🧪 **Experimentos en DevTools**: Algunas funciones aparecen aquí antes de estar disponibles públicamente.
* 🧩 **Extensiones para DevTools**: Herramientas como React Developer Tools o Redux DevTools pueden integrarse directamente.

## 💡 ¿Sabías que…?
* DevTools se actualiza cada 4-6 semanas junto con Chrome.
* Puedes probar versiones futuras usando Chrome Canary, ideal para ver lo último antes que nadie.
* El equipo de Chrome DevTools es muy activo en Twitter y GitHub.