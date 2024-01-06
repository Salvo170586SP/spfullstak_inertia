import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="bg-white dark:bg-gray-800  shadow-sm w-full py-5">
                <div className="container max-w-7xl mx-auto">
                    <Link
                        href={`/biograpies`} 
                        className="px-5 py-2 sm:px-6 lg:px-7 me-3 text-gray-900 rounded dark:text-gray-100 bg-slate-500 text-white"
                    >
                        Biografia
                    </Link>
                    <Link
                        href={`/draws`} 
                        className="px-5 py-2 sm:px-6 lg:px-7 me-3 text-gray-900 rounded dark:text-gray-100 bg-slate-500 text-white"
                    >
                        Disegni
                    </Link>
                    <Link
                        href={`/projects`} 
                        className="px-5 py-2 sm:px-6 lg:px-7 me-3 text-gray-900 rounded dark:text-gray-100 bg-slate-500 text-white"
                    >
                        Progetti
                    </Link>
                    <Link
                        href={`/files`} 
                        className="px-5 py-2 sm:px-6  lg:px-7 text-gray-900 rounded dark:text-gray-100 bg-slate-500 text-white"
                    >
                        CV-File
                    </Link>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            BENTORNATO {auth.user.name.toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
