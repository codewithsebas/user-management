export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 px-3 sm:pt-0 dark:bg-gray-900">
            <div className="mt-6 w-full overflow-hidden bg-white p-6 px-7 shadow-md sm:max-w-md rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
