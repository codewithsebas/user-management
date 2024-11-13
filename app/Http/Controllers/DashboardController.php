<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // Mostrar la vista del dashboard con los usuarios
    public function dashboard()
    {
        return Inertia::render('Dashboard', [
            'users' => User::all(),
        ]);
    }
}
