# Comenzando con Create React App

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente cuando realices cambios.\
También puedes ver cualquier error de lint en la consola.

### `npm test`

Inicia el corredor de pruebas en modo interactivo de observación.\
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.\
Empaqueta React correctamente en modo de producción y optimiza la compilación para un mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `npm run eject`

**Nota: esta es una operación unidireccional. ¡Una vez que hagas `eject`, no puedes revertirlo!**

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la única dependencia de compilación de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

No es necesario que uses `eject` nunca. El conjunto de características seleccionadas es adecuado para implementaciones pequeñas y medianas, y no deberías sentirte obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para hacerlo.

## Aprende Más

Puedes aprender más en la [documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [documentación de React](https://reactjs.org/).

### Separación de Código

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analizando el Tamaño del Paquete

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creando una Aplicación Web Progresiva

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuración Avanzada

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Despliegue

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` falla al minimizar

Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Uso de Dockerfile

### 1. Verificar que Docker esté corriendo
Asegúrate de que el servicio Docker esté en ejecución. Dependiendo de tu sistema operativo, puedes verificar esto de la siguiente manera:

- **En Windows y macOS:**
  - Asegúrate de que Docker Desktop esté abierto y funcionando.
- **En Linux:**
  - Abre una terminal y ejecuta:
 
    sudo systemctl start docker


### 2. Construir la imagen Docker
Abre una terminal o línea de comandos y navega al directorio donde se encuentra el archivo `Dockerfile`. Luego, ejecuta el siguiente comando para construir la imagen Docker:

docker build -t docker-react-image:1.0 .


### 3. Verificar que la imagen se haya creado correctamente
Para verificar que la imagen se haya creado correctamente, puedes listar todas las imágenes Docker con el siguiente comando:

docker images

Deberías ver `docker-react-image` en la lista de imágenes.


### 4. Correr un contenedor a partir de la imagen
Para correr un contenedor a partir de la imagen, usa el siguiente comando:

docker run -p 4000:80 --name docker-react-container docker-react-image:1.0


### 5. Verificar que el contenedor esté corriendo
Para verificar que el contenedor esté en ejecución, puedes listar todos los contenedores con el siguiente comando:

docker ps

Deberías ver `docker-react-container` en la lista de contenedores en ejecución.


### 6. Acceder a la aplicación
Abre un navegador web y navega a `http://localhost:4000`. Deberías ver la aplicación en ejecución.
