FROM node:lts-slim
EXPOSE 3000
WORKDIR /app
RUN yarn set version berry && yarn plugin import workspace-tools
COPY . .
RUN yarn workspaces focus --production
WORKDIR /app/packages/greeter-service/
CMD ["yarn", "node", "index.js"]