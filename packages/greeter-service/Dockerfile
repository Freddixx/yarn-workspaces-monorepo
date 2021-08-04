FROM node:lts-slim
EXPOSE 3000
WORKDIR /app
RUN yarn set version berry
COPY . .
RUN ls -la && yarn install --immutable
WORKDIR /app/packages/greeter-service/
CMD ["yarn", "node", "index.js"]