import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FileInput, Label, TextInput, Button } from "flowbite-react";
import { useEffect } from "react";

export default function Edit({ auth, project }) {
    const { data, setData } = useForm({
        project_title: "",
        project_img: "",
        project_url: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    useEffect(() => {
        setData({
            project_title: project?.project_title,
            project_img: project?.project_img,
            project_url: project?.project_url,
        });
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();
        router.post(route("projects.update", project.id), data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Progetti / Modifica
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
            <Head title="Progetti" />

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
                                name="project_img"
                                onChange={(e) =>
                                    setData("project_img", e.target.files[0])
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
                                name="project_title"
                                value={data.project_title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="w-full my-5">
                            <div className="mb-2 block">
                                <Label htmlFor="url" value="Url" />
                            </div>
                            <TextInput
                                className="w-full"
                                id="url"
                                type="text"
                                required
                                name="project_url"
                                value={data.project_url}
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
