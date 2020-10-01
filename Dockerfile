FROM node:12-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ----------------------------------------------------------------------------
FROM node:12-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV} \
    PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .
COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "dist/main"]