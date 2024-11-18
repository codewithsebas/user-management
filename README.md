# Aplicación de usuarios CRUD

This application allows the efficient management of user records. 

Users can view, create, edit and delete records quickly and easily, facilitating administration.

# Application Deployment

Several modifications were made to the application and it was properly deployed to DigitalOcean to ensure stable and scalable operation.

<a href="https://sea-lion-app-68ixi.ondigitalocean.app/login" target="_blank">Deployment link</a>

The login credentials are as follows:

email:

```
correo@ejemplo.com
```

password: 

```
1234567890
```

## First steps

## Clone repository

Clone the repository and follow the steps below:

```bash
https://github.com/codewithsebas/user-management
```

## Configure your local project

Create a `.env` file and define the environment variables.
`.env`
Give a name to your database.
Enter your username if you have it configured, or use the default which is root.
Enter the password if you have it configured, or leave it empty.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

```bash
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:F6mpe7rKREQZb1FZ+/97za0kN9DDwYd4S4mKnhFF/D8=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=es
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"
```

## Start your local server, you can use any of the existing servers such as XAMPP, WAMP or Laragon.
It is necessary to have the server turned on with:

- MySQL Database
- Apache Web Server
- Laragon

## Install the necessary dependencies

```bash
composer install
```

## Execute the necessary commands to create your database.

Runs migrations to create the database and tables automatically
```bash
php artisan migrate
```

## Now you can create your first user.

With this command you will be able to log in and use the app

```
php artisan user:create-initial
```

The credentials to get started are as follows:
correo@ejemplo.com
password: 1234567890

## You can now run the project

By executing the following commands

```bash
php artisan serve
```

And now open <a href="http://127.0.0.1:8000/login" target="_blank">http://127.0.0.1:8000/login</a> and you can use the App.

## Technologies used

For this technical test, I decided to use Laravel, as it allowed me to optimize the development and better organize the structure of the project.

For the visual design, I opted for Tailwindcss, which facilitates the creation of attractive and functional interfaces. I also used Lucide Icons to add some icons that enrich the user experience. Here are the resources I used:

<a href="https://laravel.com/docs/11.x/installation" target="_blank">Laravel Documentation</a> <br/>
<a href="https://es.react.dev/learn" target="_blank">React Documentation</a> <br/>
<a href="https://inertiajs.com/" target="_blank">Inertia Documentation</a> <br/>
<a href="https://tailwindcss.com/docs/installation" target="_blank">Tailwindcss Documentation</a> <br/>
<a href="https://lucide.dev/guide/" target="_blank">Lucide Icons Documentation</a>

