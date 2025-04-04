#IMAGEM
FROM node:22.13.0-alpine

#DIRETÓRIO DE TRABALHO NO CONTAINER
WORKDIR /app

# Copia os arquivos de dependências primeiro (melhora cache do Docker)
COPY package.json package-lock.json ./

# INSTALA DEPENDÊNCIAS
RUN npm install

# COPIA O CODIGO DO PROJETO PRO CONTAINER
COPY . .

# Expoe porta
EXPOSE 3000

# Comando pra iniciar
CMD [ "npm", "start" ]