# 1: build
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2: production
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main"]