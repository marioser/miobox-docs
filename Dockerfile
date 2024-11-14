# Usar la imagen de Node.js como base
FROM node:20 AS build

# Definir la carpeta de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run docs:build

# Usar una imagen de servidor web para servir los archivos estáticos
FROM nginx:alpine

# Copiar los archivos generados de la etapa de construcción
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
