FROM node:16 as build-stage

WORKDIR /app
ADD . .

# production stage
FROM nginx:stable-alpine as production-stage

COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]