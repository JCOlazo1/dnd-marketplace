FROM node as build

WORKDIR /app
COPY . /app/
RUN yarn install && yarn build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
