<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    // Crear un nuevo usuario
    public function create()
    {
        return Inertia::render('Users/Create');
    }

    // Listar todos los usuarios
    public function index()
    {
        return Inertia::render('Users/Users', [
            'users' => User::all(),
        ]);
    }

    // Crear un nuevo usuario
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'phone' => 'required|string|max:10',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return redirect(route('dashboard', absolute: false));
    }

    // Editar un usuario existente
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user,
        ]);
    }

    // Actualizar un usuario
    public function update(Request $request, User $user)
    {
        // Validaciones para la actualización del usuario
        $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'required|string|max:10',
            'password' => 'nullable|string|min:8',
        ]);

        // Actualización del usuario en la base de datos
        $user->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'email' => strtolower($request->email),
            'phone' => $request->phone,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);

        return redirect()->route('users.index');
    }

    // Eliminar un usuario
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index');
    }
}
