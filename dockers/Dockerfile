# Use an official PHP image as a base image
FROM php:8.2-fpm

# Create directory
RUN mkdir -p /var/www/app

# Set your working directory
WORKDIR /var/www/app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo pdo_mysql \
    && pecl install redis \
    && docker-php-ext-enable redis

RUN apt-get update && \
    apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
    docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ && \
    docker-php-ext-install gd


# install bcmath
RUN docker-php-ext-install bcmath

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# RUN cp .env.production .env

# Copy the Laravel application code into the container
COPY . .

#Installing node js
RUN curl -sL https://deb.nodesource.com/setup_20.x| bash -
RUN apt-get install -y nodejs

# Install Nginx
RUN apt-get install -y nginx

#dockerfile
RUN cd /usr/local/etc/php/conf.d/ && \
    echo 'memory_limit = -1' >> /usr/local/etc/php/conf.d/docker-php-memlimit.ini

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM
CMD service nginx start && php-fpm
