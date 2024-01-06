import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Button, FileInput, Label, Modal } from "flowbite-react";
import { Table } from "flowbite-react";
import TextInput from "@/Components/TextInput";

export default function Index({ auth, files }) {
    const [openModal, setOpenModal] = useState(false);
    const { flash } = usePage().props;

    const { data, setData } = useForm({
        title_file: "",
        url_file: "",
    });

    /* CREATE */
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("files.store"), data);
        setOpenModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    /* MODAL DELETE */
    const [openModalID, setOpenModalID] = useState(null);
    const openDelete = (id) => {
        setOpenModalID(id);
    };

    /* DELETE */
    const handleDelete = (id) => {
        router.delete(route("files.destroy", id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        CV-Files
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
            <Head title="CV-Files" />

            <div className="py-12 max-w-7xl mx-auto ">
                <div className="container mx-auto py-4">
                    <div className="flex">
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
                            <span className="ml-2">Aggiungi file</span>
                        </Button>
                        <Modal
                            show={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <Modal.Header>Aggiungi file</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="rounded overflow-hidden"
                                    >
                                        <div
                                            id="fileUpload"
                                            className="w-full my-5"
                                        >
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="file"
                                                    value="Upload file"
                                                />
                                            </div>
                                            <FileInput
                                                id="file"
                                                name="url_file"
                                                onChange={(e) =>
                                                    setData(
                                                        "url_file",
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="w-full my-5">
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="titolo"
                                                    value="Titolo"
                                                />
                                            </div>
                                            <TextInput
                                                id="titolo"
                                                type="text"
                                                required
                                                className="w-full"
                                                name="title_file"
                                                onChange={handleChange}
                                                value={data.title_file}
                                            />
                                        </div>

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

                    <div className="overflow-x-auto mt-5">
                        <div className="h-[50px] w-full my-2">
                            {flash.message && (
                                <div className="text-white bg-slate-500 dark:bg-slate-600 w-full py-3 px-4 rounded-xl">
                                    {flash.message}
                                </div>
                            )}
                        </div>
                        {files.length > 0 ? (
                            <Table hoverable>
                                <Table.Head>
                                    <Table.HeadCell>Img</Table.HeadCell>
                                    <Table.HeadCell>Titolo</Table.HeadCell>
                                    <Table.HeadCell></Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {files.map((file) => {
                                        return (
                                            <Table.Row
                                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                                key={file.id}
                                            >
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    <figure className="max-h-[60px] max-w-[100px] border border-slate-200 dark:border-slate-700  overflow-hidden rounded-lg">
                                                        <img
                                                            className="object-cover	object-center overflow-hidden"
                                                            src={
                                                                "/storage/" +
                                                                file.url_file
                                                            }
                                                            alt={
                                                                file.title_file
                                                            }
                                                        />
                                                    </figure>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {file.title_file}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <div className="flex justify-end">
                                                        <Link
                                                            className="bg-blue-600 flex items-center mx-3 hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
                                                            href={`/files/edit/${file.id}`}
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
                                                            color="red"
                                                            onClick={() =>
                                                                openDelete(
                                                                    file.id
                                                                )
                                                            }
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
                                                    </div>
                                                    <Modal
                                                        show={
                                                            openModalID ===
                                                            file.id
                                                        }
                                                        onClose={() =>
                                                            setOpenModalID(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <Modal.Header>
                                                            <div className="flex items-center">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-7 h-7"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                                    />
                                                                </svg>
                                                                <span className="ml-2">
                                                                    ATTENZIONE
                                                                </span>
                                                            </div>
                                                        </Modal.Header>

                                                        <Modal.Body>
                                                            <div className="space-y-4 text-black dark:text-white">
                                                                SEI SICURO DI
                                                                ELIMINARE
                                                                <span className="ml-1">
                                                                    {file.title_file.toUpperCase()}
                                                                </span>
                                                                ?
                                                            </div>
                                                        </Modal.Body>
                                                        <form
                                                            className="m-5"
                                                            onSubmit={(e) => {
                                                                e.preventDefault();
                                                                handleDelete(
                                                                    file.id
                                                                );
                                                            }}
                                                        >
                                                            <div className="flex justify-end">
                                                                <Button
                                                                    color="red"
                                                                    type="submit"
                                                                    className="me-3"
                                                                >
                                                                    elimina
                                                                </Button>
                                                                <Button
                                                                    onClick={() =>
                                                                        setOpenModalID(
                                                                            false
                                                                        )
                                                                    }
                                                                >
                                                                    annulla
                                                                </Button>
                                                            </div>
                                                        </form>
                                                    </Modal>
                                                </Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table>
                        ) : (
                            <div className="text-black dark:text-white w-full text-center">
                                non ci sono elementi
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
