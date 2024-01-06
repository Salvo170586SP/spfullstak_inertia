import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FileInput, Label, TextInput, Button } from "flowbite-react";
import { useEffect } from "react";

export default function Edit({ auth, file }) {
    const { data, setData } = useForm({
        title_file: "",
        url_file: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    useEffect(() => {
        setData({
            title_file: file?.title_file,
            url_file: file?.url_file
        });
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();
        router.post(route("files.update", file.id), data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        CV-File / Modifica
                    </h2>
                    <Link
                        href="/draws"
                        className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500"
                    >
                        Torna indietro
                    </Link>
                </div>
            }
        >
            <Head title="CV file" />

            <div className="py-12 max-w-[500px] mx-auto ">
                <div className="container mx-auto ">
                    <form
                        onSubmit={handleEdit}
                        className="dark:bg-gray-800 rounded-lg p-5"
                    >
                        <div id="fileUpload" className="w-full my-5">
                            <div className="mb-2 block">
                                <Label htmlFor="file" value="Upload file" />
                            </div>
                            <FileInput
                                id="file"
                                name="url_file"
                                onChange={(e) =>
                                    setData("url_file", e.target.files[0])
                                }
                            />
                        </div>
                        <div className="w-full my-5">
                            <div className="mb-2 block">
                                <Label htmlFor="titolo" value="Titolo" />
                            </div>
                            <TextInput
                                id="titolo"
                                type="text"
                                required
                                className="w-full"
                                name="title_file"
                                value={data.title_file}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex">
                            <Button type="submit" className="mr-3">
                                modifica
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
