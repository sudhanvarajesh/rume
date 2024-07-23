# Use the official Node.js image
FROM node:16

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Expose port 3000 and start the app
EXPOSE 3000
CMD ["npm", "start"]
