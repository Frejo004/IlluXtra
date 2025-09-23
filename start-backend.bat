@echo off
cd backend
echo Démarrage du serveur Laravel...
php artisan serve --host=0.0.0.0 --port=8000
pause