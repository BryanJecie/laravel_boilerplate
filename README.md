# API SicuroBrands ([Site](https://api.sicurobrands.com/backend))


```bash
# Instructions

# Clone via ssh
$ git clone git@github.com:SicuroBrands/api-sicurobrands.git

# Install dependencies
$ composer install

# Config database
$ cp .env.example .env

# Run commands
$ php artisan key:generate

# Run the Users Database for the first time
$ php artisan migrate:users --seed
$ php artisan migrate:migrate --seed

# Run NPM commands
$ npm install && npm run dev

# Run app via local
$ php artisan serve

# Run app via Docker
$ make app-local-build
```
