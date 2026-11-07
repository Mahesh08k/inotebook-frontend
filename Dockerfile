
# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application source code
COPY . .

ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST=$REACT_APP_API_HOST

# Build the production version
RUN npm run build


# Stage 2: Serve the production build using Nginx
FROM nginx:alpine

# Copy the compiled React files into Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]