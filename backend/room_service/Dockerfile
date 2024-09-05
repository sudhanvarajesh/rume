FROM node:16


ENV MONGO_URI=mongodb+srv://sudhanva0001:MUmwEw5liHQuOcqd@rume-db.qiefvt9.mongodb.net/?retryWrites=true&w=majority&appName=rume-db
ENV PORT=8083

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8083
CMD ["node", "src/index.js"]