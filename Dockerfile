# Stage 1: Build the application
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy the built assets from the build stage
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose the port SvelteKit will run on
EXPOSE 3000

# Start the server
# adapter-node creates a handler in build/index.js
CMD ["node", "build/index.js"]