# Base image
FROM node:16

ENV PORT=3000


# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the React application
RUN npm run build

# Install `serve` to serve the app on container startup
RUN npm install -g serve

# Configure the container to run in an executed manner
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

