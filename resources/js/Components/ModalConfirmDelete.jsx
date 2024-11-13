import { X } from 'lucide-react';
import React from 'react';

export default function ModalConfirmDelete({ isOpen, onClose, onConfirm, processing }) {
    return (
        <div
            className={`text-sm fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-50 
                        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                        transition-opacity duration-300 ease-in-out`}
        >
            <div className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg duration-200 ${isOpen ? 'scale-100' : 'scale-95'}`}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white pe-8">¿Estás seguro de eliminar este usuario?</h3>
                <button onClick={onClose}>
                    <X className='absolute top-2 right-2 text-gray-700 dark:text-gray-200 cursor-pointer' />
                </button>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md duration-200 hover:bg-gray-600/60"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500/85 text-white rounded-md duration-200 hover:bg-red-500"
                        disabled={processing}
                    >
                        {processing ? 'Eliminando...' : 'Eliminar'}
                    </button>
                </div>
            </div>
        </div>
    );
}
