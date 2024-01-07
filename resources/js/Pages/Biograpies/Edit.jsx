import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Editor.css";

export default function Edit({ auth, biograpy }) {
    const [description, setDescription] = useState("");

    useEffect(() => {
        setDescription(biograpy?.description || description);
    }, [biograpy]);

    const handleEdit = (id) => {
        router.put(route("biograpies.update", id), { description });
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Biografia / Modifica
                    </h2>
                    <Link
                        href="/biograpies"
                        className="bg-slate-600 text-white px-4 py-3 rounded-3xl hover:bg-slate-500"
                    >
                        Torna indietro
                    </Link>
                </div>
            }
        >
            <Head title="Biografia" />

            <div className="py-12 max-w-7xl mx-auto ">
                <div className="container mx-auto py-4">
                    <div className="flex">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEdit(biograpy.id);
                            }}
                            className="rounded overflow-hidden w-full"
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                data={description}
                                onChange={handleEditorChange}
                            />
                            <Button type="submit" className="mt-3 rounded-3xl">
                                applica modifiche
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
