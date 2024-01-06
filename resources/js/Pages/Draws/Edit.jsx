import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FileInput, Label, TextInput, Button } from "flowbite-react";
import { useEffect } from "react";

export default function Edit({ auth, draw }) {
    const { data, setData } = useForm({
        draw_title: "",
        draw_img: "",
        draw_url: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    useEffect(() => {
        setData({
            draw_title: draw?.draw_title,
            draw_img: draw?.draw_img,
            draw_url: draw?.draw_url,
        });
    }, []);

    const handleEdit = (id) => {
        router.post(route("draws.update", id), data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Disegni / Modifica
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
            <Head title="Disegni" />

            <div className="py-12 max-w-[500px] mx-auto ">
                <div className="container mx-auto ">
                    <form
                        onSubmit={(e) => {e.preventDefault(); handleEdit(draw.id)}}
                        className="dark:bg-gray-800 rounded-lg p-5"
                    >
                        <div id="fileUpload" className="w-full my-5">
                            <div className="mb-2 block">
                                <Label htmlFor="file" value="Upload file" />
                            </div>
                            <FileInput
                                id="file"
                                name="draw_img"
                                onChange={(e) =>
                                    setData("draw_img", e.target.files[0])
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
                                name="draw_title"
                                onChange={handleInputChange}
                                value={data.draw_title}
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
                                name="draw_url"
                                onChange={handleInputChange}
                                value={data.draw_url}
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
