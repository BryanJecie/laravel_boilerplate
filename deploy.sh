#!/usr/bin/env bash

# pull update from repository
git stash
git git fetch
git pull origin develop

# install dependencies
composer install --ignore-platform-reqs && composer dump-autoload

# run artisan commands
php artisan config:cache && php artisan migrate --force

#run  npm commands
npm install && npm run dev
