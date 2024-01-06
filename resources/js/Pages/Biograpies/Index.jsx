import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect } from "react";

export default function Index({ auth, biograpies }) {
    const [description, setDescription] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const { flash } = usePage().props;

   

    /* CREATE */
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("biograpies.store"), { description });
        setOpenModal(false);
    };

    /* DELETE */
    const handleDelete = (id) => {
        router.delete(route("biograpies.destroy", id));
        setOpenModalDelete(false);
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Biografia
                    </h2>
                    <Link
                        href="/dashboard"
                        className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-500"
                    >
                        Torna alla dashboard
                    </Link>
                </div>
            }
        >
            <Head title="Biografia" />

            <div className="py-12 max-w-7xl mx-auto ">
                <div className="container mx-auto py-4">
                    <div className="flex">
                        <div className="h-[50px] w-full">
                            {flash.message && (
                                <div className="text-white bg-slate-500 dark:bg-slate-600 w-full py-3 px-4 rounded-xl">
                                    {flash.message}
                                </div>
                            )}
                        </div>
                        {biograpies.length <= 0 ? (
                            <Button onClick={() => setOpenModal(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>{" "}
                                <span className="ml-2">Aggiungi biografia</span>
                            </Button>
                        ) : null}

                        <Modal
                            show={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <Modal.Header>Aggiungi biografia</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="rounded overflow-hidden tecx-black"
                                    >
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={description}
                                            onChange={handleEditorChange}
                                        />
                                        {/*   <textarea
                                            id="editor"
                                            required
                                            name="description"
                                            rows="15"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            className="block p-2.5 w-full text-sm text-gray-900   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        ></textarea> */}
                                        <Modal.Footer>
                                            <Button type="submit">invia</Button>
                                            <Button
                                                color="gray"
                                                onClick={() =>
                                                    setOpenModal(false)
                                                }
                                            >
                                                annulla
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>

                    {biograpies.length > 0 ? (
                        <>
                            <div className="flex justify-between items-center w-full my-4">
                                <div className="text-1xl font-bold dark:text-white text-black ">
                                    DESCRIZIONE BIOGRAFIA
                                </div>
                            </div>
                            <div className="w-full dark:bg-gray-800 dark:text-white bg-white border border-slate-400 dark:border-slate-700 rounded-lg">
                                <div className="p-5 min-h-[400px]">
                                    {biograpies.map((biograpy) => {
                                        return (
                                            <div key={biograpy.id}>
                                                <div className="flex justify-end">
                                                    <Link
                                                        href={`biograpies/edit/${biograpy.id}`}
                                                        className="bg-blue-600 mx-3 flex items-center hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                            />
                                                        </svg>
                                                        <span className="ml-1">
                                                            modifica
                                                        </span>
                                                    </Link>

                                                    <Button
                                                        onClick={() =>
                                                            setOpenModalDelete(
                                                                true
                                                            )
                                                        }
                                                        color="red"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                            />
                                                        </svg>

                                                        <span className="ml-1">
                                                            elimina
                                                        </span>
                                                    </Button>
                                                    <Modal
                                                        show={openModalDelete}
                                                        onClose={() =>
                                                            setOpenModalDelete(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <Modal.Header>
                                                            Attenzione
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div className="space-y-6">
                                                                <p className="dark:text-white">
                                                                    SEI SICURO
                                                                    DI ELIMINARE
                                                                    LA
                                                                    BIOGRAFIA?
                                                                </p>
                                                                <Modal.Footer>
                                                                    <Button
                                                                        color="red"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            handleDelete(
                                                                                biograpy.id
                                                                            );
                                                                            e.preventDefault();
                                                                        }}
                                                                    >
                                                                        elimina
                                                                    </Button>
                                                                    <Button
                                                                        color="gray"
                                                                        onClick={() =>
                                                                            setOpenModalDelete(
                                                                                false
                                                                            )
                                                                        }
                                                                    >
                                                                        annulla
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>

                                                <div
                                                    className="mt-10"
                                                    dangerouslySetInnerHTML={{
                                                        __html: biograpy.description,
                                                    }}
                                                ></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-full text-center text-black dark:text-white">
                            aggiungi una biografia
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
