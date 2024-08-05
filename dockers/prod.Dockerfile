# Use an official PHP image as a base image
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo pdo_mysql \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install gd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Create directory and set working directory
RUN mkdir -p /var/www/app

# Work container DIR
WORKDIR /var/www/app

# Copy Composer files and install application dependencies
COPY composer.json composer.lock ./
RUN composer install --ignore-platform-reqs --prefer-dist --no-scripts

# Copy the Laravel application code into the container
COPY . .

#Installing node js
RUN curl -sL https://deb.nodesource.com/setup_20.x| bash -
RUN apt-get install -y nodejs

# Install Nginx
RUN apt-get install -y nginx

# Set permissions for Laravel
RUN chown -R www-data:www-data /var/www/app/storage /var/www/app/bootstrap/cache

# Set PHP memory limit
RUN echo 'memory_limit = -1' > /usr/local/etc/php/conf.d/docker-php-memlimit.ini

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM and Nginx
CMD service nginx start && php-fpm
