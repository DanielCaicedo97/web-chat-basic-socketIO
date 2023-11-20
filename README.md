# Web Chat Proyecto

Este proyecto es un ejemplo básico de un web chat desarrollado utilizando Socket.io y Node.js con Express. Incluye el uso de rutas, middleware básico para la autenticación y estilos CSS para mejorar la apariencia.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/web-chat-proyecto.git

2. instala las dependencias:

    ```bash
        Copy code
        cd web-chat-proyecto
        npm install

# Uso
1. Ejecuta el servidor en modo desarrollo:

    ```bash
        npm run dev
        
2. Abre tu navegador y visita http://localhost:3000.

3. Disfruta del web chat básico.

## Estructura del Proyecto

- **src/**: Contiene el código fuente del servidor.
  - `index.js`: Archivo principal del servidor.
  - **routes/**: Carpeta que contiene las rutas de la aplicación.
  - **middleware/**: Carpeta que contiene middleware, como el middleware básico para la autenticación (`isLoggedIn`).
  - **public/**: Carpeta con archivos estáticos como HTML, CSS y scripts del cliente.
- **css/**: Contiene archivos CSS para estilizar la aplicación.
- **js/**: Contiene archivos JavaScript para la lógica del cliente.
- `package.json`: Archivo de configuración de npm con las dependencias y scripts.

## Dependencias Principales

- **express**: Framework web para Node.js.
- **socket.io**: Biblioteca para la comunicación en tiempo real mediante WebSocket.
- **nodemon**: Herramienta que reinicia automáticamente la aplicación Node.js cuando se detectan cambios en el código fuente.
- **cookie-parser**: Middleware para parsear las cookies en las solicitudes HTTP.

## Desarrollador

Daniel Alejandro Caicedo 

