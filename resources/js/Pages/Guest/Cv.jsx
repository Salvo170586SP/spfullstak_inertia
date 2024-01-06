import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { useSelector } from "react-redux";

export default function Cv({ files }) {
    const dark = useSelector((state) => state.dark.value);

    return (
        <Guest>
            <section
                id="cv"
                className={`${dark ? "text-white" : "text-black"}    pt-32  `}
            >
                <div className="container  px-10 md:px-32   mx-auto">
                    <div className="text-start mb-10">
                        <h1 className="text-4xl ">Curriculum Vitae</h1>
                        <span>& certificati conseguiti</span>
                    </div>

                    <div className="   mt-20   ">
                        <div>
                            <p>
                                Benvenuto nella sezione dedicata alle
                                candidature e alle competenze professionali. Qui
                                troverai il mio curriculum vitae,
                                attestati e lettera di presentazione, per esplorare le mie esperienze
                                e le qualifiche conseguite.
                            </p>
                        </div>
                    </div>
                    <div className="grid  sm:grid-rows md:grid-cols-3 mt-20 gap-5 align-center justify-center my-10">
                        {files.map((file, id) => {
                            return (
                                <div
                                    key={id}
                                    className="relative group flex justify-center hover:scale-110 transform-gpu transition my-10"
                                >
                                    <figure className="relative ">
                                        <img
                                            src={
                                                "http://127.0.0.1:8000/storage/" +
                                                file.url_file
                                            }
                                            width={350}
                                            alt={file.title_file}
                                            className="border  rounded-3xl shadow-md hover:shadow-xl"
                                        />
                                        <a
                                            href={`/cv-page/download/${file.id}`}
                                            className="absolute bottom-10 transition text-white bg-opacity-80 bg-gray-800  shadow px-5 py-1 rounded-r-lg "
                                        >
                                            <small>
                                                <i className="fa fa-solid fa-download"></i>
                                                scarica
                                            </small>
                                        </a>
                                        <div className="absolute text-white   bottom-20  group-hover:opacity-100 opacity-0 transition bg-opacity-60   bg-black  shadow px-5 py-1 rounded-r-lg ">
                                            <small>{file.title_file}</small>
                                        </div>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Guest>
    );
}
