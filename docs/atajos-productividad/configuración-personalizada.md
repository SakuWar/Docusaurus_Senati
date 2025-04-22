# Configuración personalizada

Ajusta el entorno de desarrollo del navegador para que se adapte perfectamente a tu flujo de trabajo y estilo personal. DevTools es altamente configurable y puede convertirse en una potente extensión de tu editor de código.

## 🎨 1. **Temas y Apariencia**

Personaliza la estética para mejorar la legibilidad y reducir la fatiga visual:

* **Cambiar tema (Claro/Oscuro):**
   * Ir a `Settings (⚙️)` > **Preferences** > **Appearance** > `Theme`.
   * Elige entre *Dark*, *Light* o incluso *System preferred*.

* **Ajustar fuente y tamaño de texto:**
   * Modifica la fuente con `Settings > Preferences > Sources > Font`.
   * Ideal para pantallas 4K o cuando trabajas muchas horas seguidas.

## 🗂️ 2. **Workspaces: sincroniza DevTools con tu editor local**

Guarda los cambios que haces en el navegador directamente en tus archivos locales.

* **Pasos para configurar un Workspace:**
   1. Abre `Settings > Workspace`.
   2. Haz clic en "Add folder" y selecciona tu proyecto local.
   3. Da permisos al navegador para acceder al sistema de archivos.
   4. Asocia los archivos del sitio a las rutas locales.

🔁 **Tip**: Así puedes usar `Ctrl + S` en DevTools y que los cambios se guarden en tu proyecto real (¡sin copiar y pegar manualmente!).

## 🧪 3. **Experimentos (Experimental Features)**

Activa funcionalidades avanzadas o en desarrollo que aún no están habilitadas por defecto.

* **Activar Experimentos:**
   * Ve a `Settings > Experiments`.
   * Marca opciones como:
      * `Enable CSS Grid debugging` para visualizar rejillas.
      * `Live expressions` para monitorear variables en tiempo real.
      * `New recording panel` para grabar sesiones más detalladas.

⚠️ Algunos experimentos requieren reiniciar DevTools para aplicar cambios.

## 🎯 4. **Atajos personalizados**

Adapta los atajos a tus preferencias y mejora tu velocidad de navegación por las herramientas.

* **Modificar atajos:**
   * Ve a `Settings > Shortcuts`.
   * Filtra por panel o función.
   * Haz clic sobre un atajo y pulsa la nueva combinación (ej. `Alt + W` para cerrar pestaña activa).

🧠 Puedes usar esta función para replicar atajos de otros entornos como VS Code o Sublime.

## 💡 5. **Snippets personalizados**

Automatiza tareas repetitivas usando fragmentos de código que puedes ejecutar desde la consola.

* **Cómo crear un Snippet:**
   1. Abre el panel `Sources > Snippets`.
   2. Haz clic derecho > "New".
   3. Escribe tu código y guarda.

* **Ejemplo útil de snippet:**

```javascript
monitorEvents(window, 'resize'); // Monitorea eventos de redimensionado de ventana
```

🧪 También puedes usar `copy()` para exportar objetos fácilmente desde consola.

## 🔁 6. **Exportar e importar configuración**

Llévate tu configuración a otro equipo o respáldala antes de hacer cambios:

* Ve a `Settings > Export global settings`.
* Guarda el archivo `.devtools-settings.json`.

Para importar:
* Usa `Import global settings` y selecciona tu archivo guardado.