<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateInitialUser extends Command
{
    // El nombre y la firma del comando.
    protected $signature = 'user:create-initial';

    // La descripción del comando.
    protected $description = 'Crear un usuario inicial';

    // Ejecución del comando.
    public function handle()
    {
        // Datos del usuario inicial.
        $userData = [
            'name' => 'Usuario',
            'lastname' => 'Prueba',
            'email' => 'correo@ejemplo.com',
            'phone' => '1234567890',
            'password' => '$2y$12$w8oXWvCLdoFzTPHJsOUkn.MlMb4JbcHyY3YI/87vTGbT15r7u0Ytm',
        ];

        // Crear usuario.
        $user = User::create($userData);

        if ($user) {
            $this->info('Usuario inicial creado con éxito.');
        } else {
            $this->error('No se pudo crear el usuario inicial.');
        }
    }
}
