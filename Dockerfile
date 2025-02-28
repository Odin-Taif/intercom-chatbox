
# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Install dependencies, including tsx
RUN npm install -g tsx && npm install
# # Copy the rest of the application code
# COPY . .

# # # Generate any Drizzle configuration (if needed)
# RUN npx drizzle-kit generate 
# Build the TypeScript code
RUN npm run build

# Expose the port your app will run on
EXPOSE 3001



# Command to run the application in production
# CMD ["npm", "start"]

CMD ["tsx", "src/index.ts"]