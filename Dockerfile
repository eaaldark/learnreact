FROM node:16.19.0-alpine

ARG USERNAME=node

ARG USER_UID=1000
ARG USER_GID=1000

RUN apk --no-cache add shadow bash

RUN npm i -g react-scripts

RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME

WORKDIR /app

USER $USERNAME