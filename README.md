# SubayBus APP 

## Instruction

# Clone via ssh
$ git clone git@bitbucket.org:mentorspire-workspace/subaybus.git

# Install dependencies
$ composer install

# Config database
$ cp .env.example .env

# Run commands
$ php artisan key:generate
$ php artisan migrate
$ php artisan storage:link

$ npm install && npm run dev

# Run app via local
$ php artisan serve

