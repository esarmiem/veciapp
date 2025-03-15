# VeciApp

## Instalación de dependencias
Antes de ejecutar la aplicación, asegúrate de instalar las dependencias necesarias:
```bash
npm install
```

## Ejecución de la Aplicación
1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Descarga **Expo Go** en tu dispositivo móvil, desde tu tienda de aplicaciones preferidas:
   - **iOS**: Usa la cámara para escanear el código QR que aparece en la terminal.
   - **Android**: Abre Expo Go y escanea el código QR mostrado en la terminal.

## Características de Desarrollo
- Construido con **React Native** y **Expo**.
- Uso de **TypeScript** para mayor seguridad en el código.
- **TailwindCSS** para la estilización.
- **Expo Router** para la navegación.
- Fuentes personalizadas (**Inter** y **Poppins**).

## Estructura del Proyecto
```plaintext
veciapp/
├── app/                 # Pantallas principales de la aplicación
│   └── (tabs)/         # Pantallas con navegación en pestañas
├── assets/             # Recursos estáticos (imágenes, fuentes)
├── components/         # Componentes reutilizables
└── hooks/              # Hooks personalizados de React
```

## Scripts Disponibles
- `npm run dev` - Inicia el servidor de desarrollo.
- `npm run build:web` - Construye la aplicación para la plataforma web.
- `npm run lint` - Ejecuta el análisis de código para verificar errores de estilo y sintaxis.

## Solución de Problemas
Si encuentras algún problema al ejecutar la aplicación, prueba lo siguiente:

1. Asegúrate de que Expo Go esté actualizado.
2. Limpia la caché de npm:
   ```bash
   npm cache clean --force
   ```
3. Elimina y reinstala las dependencias:
   ```bash
   rm -rf node_modules
   npm install
   ```
4. Reinicia el servidor de desarrollo limpiando la caché:
   ```bash
   npm run dev -- --clear
   ```
   
Este README proporciona información esencial para que los desarrolladores de Alaska Tech comiencen con VeciApp, incluyendo instrucciones de instalación, ejecución y solución de problemas. ¡Déjame saber si necesitas ajustes! 🚀
