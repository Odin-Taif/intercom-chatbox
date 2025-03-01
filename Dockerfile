
# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
#build the app
RUN npm run build

RUN mv /src/index.html /src/dist/

# Expose the port your app will run on
EXPOSE 3001

# Command to run the application in production
CMD ["npm", "start"]