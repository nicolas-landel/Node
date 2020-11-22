FROM debian:9

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq \
    && apt-get clean -y

ADD . /app/

WORKDIR /app

RUN npm install

# On which port the application is listening
EXPOSE 2368

# Which repository is shared with the host
VOLUME /app/logs

CMD npm run start