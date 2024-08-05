FROM php:8.2-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

ADD ./entrypoint/crontab /etc/crontabs/root

CMD ["crond", "-f"]
