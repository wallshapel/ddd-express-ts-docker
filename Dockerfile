# Descargamos node 18 lts
FROM node:18
# Nos ubicamos en el directorio donde queremos alojar el proyecto
WORKDIR /app
# Pasa todo el proyecto al directorio raíz de nuestro contenedor, ignorando aquellos archivos y carpetas especificados en el .dockerignore
COPY . .
# Instalamos todas las dependencias del proyecto
RUN npm install
# Habilitamos el puerto 3000 en este contenedor. La idea es que nuestra app, use este puerto
EXPOSE 3000
# Ejecutamos nuestro proyecto
CMD [ "npm", "start" ]