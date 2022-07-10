FROM node:14.2.0-alpine3.11 as production
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
