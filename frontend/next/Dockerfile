FROM node:16.13.1


RUN apt-get update

RUN mkdir /usr/src/next
WORKDIR /usr/src/next

COPY ./package*.json ./

# COPY --from=builder /app/next.config.js ./
COPY --from=builder /usr/src/next/public ./public
# ★1 nodejsじゃなくてnodeをuser:groupに指定
COPY --from=builder --chown=node:node /usr/src/next/.next ./.next
COPY --from=builder /usr/src/next/node_modules ./node_modules
COPY --from=builder /usr/src/next/package.json ./package.json

USER nextjs

RUN npm install

COPY . .
