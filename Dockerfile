FROM node:14-alpine
WORKDIR /app
COPY . .

RUN npm install -g serve
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["serve", "build"]
