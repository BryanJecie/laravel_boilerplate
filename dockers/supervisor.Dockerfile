# Use an official PHP image as a base image
FROM php:8.2-fpm

ARG APP_ROOT
ARG COMMAND
ARG OPTIONS

ENV APP_ROOT=$APP_ROOT
ENV COMMAND=$COMMAND
ENV OPTIONS=$OPTIONS

# install supervisor
RUN apt-get update \
    && apt-get install -y --no-install-recommends supervisor

# Install PCNTL
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions pcntl

# install supervisor logs directory
RUN mkdir -p /etc/supervisor/logs

ENTRYPOINT [ "/usr/bin/supervisord", "--nodaemon", "--configuration", "/etc/supervisord.conf" ]



