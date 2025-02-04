# Pour Build de l'application 
FROM node:18 AS build-sta

# Définir le répertoire de travail
WORKDIR /app
# Copier les fichiers nécessaires
COPY package*.json ./

# Pour Installer les dépendances
RUN npm install

# Copier le reste des fichiers et compiler l'application
COPY . .
RUN npm run build --prod

# Serveur Nginx pour servir l'application
FROM nginx:alpine AS production-stage

# Copier les fichiers Angular buildés vers Nginx
COPY --from=build-stage /app/dist/flowatch /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
