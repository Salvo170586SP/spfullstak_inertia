import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { FileInput, Label, TextInput, Button } from "flowbite-react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Edit({ auth, project }) {
    const projectTitle = useRef();
    const { errors } = usePage().props;
    const { data, setData } = useForm({
        project_title: "",
        project_img: "",
        project_url: "",
    });
    console.log(errors.projectTitleEdit);
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
        router.post(route("projects.update", project.id), data, {
            onError: () => projectTitle.current.focus(),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Progetti / Modifica
                    </h2>
                    <Link
                        href="/projects"
                        className="bg-slate-600 text-white px-4 py-3 rounded-3xl hover:bg-slate-500"
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
                                style={{
                                    border: "0",
                                    borderRadius: "0",
                                }}
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
                                className="w-full"
                                name="project_title"
                                value={data.project_title}
                                onChange={handleInputChange}
                                ref={projectTitle}
                            />
                            <InputError
                                message={errors.project_title}
                                className="mt-2"
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
                                name="project_url"
                                value={data.project_url}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex">
                            <Button type="submit" className="mr-3 rounded-3xl">
                                modifica
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
