# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
COPY prisma ./prisma
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app port
EXPOSE 3000
EXPOSE 5555
# Start the application
CMD ["npm", "run", "dev"]
