import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import { Trash2, UserRoundPen } from 'lucide-react';
import ModalConfirmDelete from '@/Components/ModalConfirmDelete';

export default function Index({ users }) {
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const { delete: deleteUser, processing } = useForm();

    // Funcion para abrir el modal
    const openModal = (userId) => {
        setUserToDelete(userId);
        setShowModal(true);
    };

    // Funcion para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
        setUserToDelete(null);
    };

    // Funcion para eliminar el usuario
    const handleDelete = () => {
        if (userToDelete) {
            deleteUser(route('users.destroy', userToDelete), {
                onSuccess: () => {
                    closeModal();
                },
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center gap-3'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Usuarios
                    </h2>
                    <Link
                        href="/users/create"
                        className="px-6 py-2 rounded-md text-sm transition-all duration-300 ease-in-out border-2 border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300 hover:border-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:border-gray-500"
                    >
                        Crear usuario
                    </Link>
                </div>
            }
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className=" text-gray-900 dark:text-gray-100">
                            <div className="p-4">
                                <table className="w-full min-w-full">
                                    <thead className='border-b border-white/20'>
                                        <tr>
                                            <th className="text-start p-2 pb-4">Nombre</th>
                                            <th className="text-start p-2 pb-4">Apellido</th>
                                            <th className="text-start p-2 pb-4">Email</th>
                                            <th className="text-start p-2 pb-4">Telefono</th>
                                            <th className="text-start p-2 pb-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className='rounded'>
                                        {users.map(user => (
                                            <tr key={user.id} className="odd:bg-gray-100 even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                                <td className="p-2 py-4">{user.name}</td>
                                                <td className="p-2 py-4">{user.lastname}</td>
                                                <td className="p-2 py-4">{user.email}</td>
                                                <td className="p-2 py-4">{user.phone}</td>
                                                <td className="p-2 py-4 flex items-center gap-3">
                                                    <Link
                                                        href={`/users/${user.id}/edit`}
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        <UserRoundPen className='duration-200 hover:text-gray-800 dark:hover:text-white' />
                                                    </Link>
                                                    <button
                                                        onClick={() => openModal(user.id)}
                                                        className="text-red-500 hover:underline"
                                                    >
                                                        <Trash2 className='duration-200 hover:text-gray-800 dark:hover:text-white' />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalConfirmDelete
                isOpen={showModal}
                onClose={closeModal}
                onConfirm={handleDelete}
                processing={processing}
            />
        </AuthenticatedLayout>
    );
}
