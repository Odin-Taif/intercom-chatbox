# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies, including tsx
RUN npm install -g tsx && npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port your app will run on
EXPOSE 3001

# Command to run the application using tsx
CMD ["npx", "tsx", "src/index.ts"]
