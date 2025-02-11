# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 5000

# Start the server (since server.js is inside src/)
CMD ["node", "src/server.js"]
