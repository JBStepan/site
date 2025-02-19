FROM node:20-alpine as build

WORKDIR /app

COPY . . 

RUN npm i --frozen-lockfile \
&& npm run build


FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT [ "node", "build" ]