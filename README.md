# Docusaurus SENATI 🦖

Página de documentación de Manual de uso del inspector de elementos echa con Docusaurus

<p align="center">
  <img src="Screenshot 2025-04-29 194224.png" alt="Mi imagen" width="900">
</p>

## Características Principales ✨

- **Documentación en Markdown**: Fácil escritura y mantenimiento
- **Diseño Responsive**: Adaptable a cualquier dispositivo
- **Modo Oscuro/Claro**: Alternancia visual integrada
- **Búsqueda Inteligente**: Funcionalidad de búsqueda instantánea
- **Organización Jerárquica**: Estructura de documentación clara
- **Blog Integrado**: Sección para artículos técnicos y actualizaciones

## Instalación Local 💻

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SakuWar/Docusaurus_Senati.git
   ```

2. Instala dependencias:
   ```bash
   cd Docusaurus_Senati
   npm install
   ```

3. Inicia el servidor local:
   ```bash
   npm run start
   ```

## Estructura del Proyecto 📂

```
Docusaurus_Senati/
├── docs/               # Documentación principal
├── blog/               # Artículos del blog
├── src/                # Componentes React personalizados
├── static/             # Archivos estáticos (imágenes, CSS)
└── docusaurus.config.js # Configuración principal
```

## Personalización 🎨

### Configuración Básica
Edita `docusaurus.config.js` para:
* Cambiar título y metadatos
* Agregar enlaces de redes sociales
* Modificar el pie de página
* Configurar temas de color

### Agregar Documentación
1. Crea nuevos archivos .md en `/docs`
2. Actualiza `sidebars.js` para incluir nuevos elementos

### Temas y Estilos
* Modifica CSS personalizado en `src/css/custom.css`
* Usa componentes React en `src/components`

## Despliegue 🚀

Para generar la versión de producción:
```bash
npm run build
```

**Plataformas recomendadas:**
* GitHub Pages
* Vercel
* Netlify
* AWS Amplify
