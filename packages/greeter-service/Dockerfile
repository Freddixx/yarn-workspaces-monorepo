FROM node:lts-slim
EXPOSE 3000
WORKDIR /app
RUN yarn set version berry
COPY . .
WORKDIR /app/packages/greeter-service/
RUN yarn workspaces focus --production
CMD ["yarn", "node", "index.js"]