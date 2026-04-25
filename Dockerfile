FROM node:20-alpine AS client-build
WORKDIR /app

COPY client/package*.json ./client/
RUN npm ci --prefix client

COPY client ./client
RUN npm run build --prefix client

FROM node:20-alpine AS server
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
COPY --from=client-build /app/client/build ./client/build

EXPOSE 5000
CMD ["node", "server.js"]
