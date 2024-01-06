import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { useSelector } from "react-redux";

export default function Draws({ draws }) {
    const dark = useSelector(((state) => state.dark.value))

    return (
        <Guest>
            <section id="draws" className={` ${dark ? 'text-white' : 'text-black'}    pt-32 `}>
                <div className="container px-10 md:px-32  mx-auto">
                    <div className="text-start">
                    <h2 className="text-4xl">DISEGNI</h2>
                    <h3>Creo ritratti su richiesta. Disegni realizzati con grafite e carboncino.</h3>
                    <small>* clicca l'immagine per vedere i dettagli</small>
                    </div>
                    <div className="grid sm:grid-rows md:grid-cols-4  py-10   align-center justify-center">
                        {draws.map((draw, id) => {
                            return (
                                <a
                                    key={id}
                                    href={draw.draw_url}
                                    target="_blank"
                                    className="relative group m-1 cursor-pointer"
                                >
                                    <figure className="object-contain text-black h-80 rounded-3xl overflow-hidden shadow-xl transition hover:scale-95 ">
                                        <img
                                            src={"/storage/" + draw.draw_img}
                                            alt={draw.draw_title}
                                            className="w-full object-cover h-full"
                                        />
                                    </figure>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Guest>
    );
}
