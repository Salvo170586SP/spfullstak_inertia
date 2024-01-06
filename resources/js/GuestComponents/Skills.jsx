import "./Skills.scss";
import bootstrap from "../../assets/images/icon/bootstrap.svg";
import php from "../../assets/images/icon/php.svg";
import laravel from "../../assets/images/icon/laravel.png";
import mysql from "../../assets/images/icon/mysql.svg";
import react from "../../assets/images/icon/react.png";
import tailwind from "../../assets/images/icon/tailwind.png";

export function Skills() {
    return (
        <>
            <section
                id="competenze"
                className="text-black py-28"
            >
                <div className="container mx-auto px-10 md:px-32">
                    <div className="text-center py-5">
                        <h2 className="text-3xl">
                            SVILUPPO SITI WEB & WEB APP
                        </h2>
                        <span className="text-sm">Tecnologie che utilizzo</span>
                    </div>
                    <div className="grid grid-row-2 content-center items-center ">
                        <div className="flex flex-col items-center justify-center my-20    ">
                            <p className="max-w-[1024px] text-justify">
                                Specializzando nella creazione di sistemi
                                gestionali personalizzati, efficienti back
                                office e API avanzate con Laravel. La mia
                                passione è trasformare le esigenze aziendali in
                                soluzioni software intuitive e performanti.
                                Realizzone di web-app e single-page application
                                con la libreria React, assieme a Bootstrap o
                                Tailwind per dare quel tocco alla componente UX
                                garantendo un'esperienza utente coinvolgente e
                                visivamente accattivante.
                            </p>
                        </div>

                        <div className="box-icon container flex flex-wrap justify-between">
                            <img
                                src={bootstrap}
                                style={{ width: "9%", height: "9%" }}
                                alt="bootstrap"
                                className="bootstrap my-4"
                            />
                            <img
                                src={php}
                                alt="php"
                                style={{ width: "9%", height: "9%" }}
                                className="php   my-4"
                            />
                            <img
                                src={laravel}
                                alt="laravel"
                                style={{ width: "9%", height: "9%" }}
                                className="laravel     my-4"
                            />
                            <img
                                src={mysql}
                                alt="mysql"
                                style={{ width: "9%", height: "9%" }}
                                className="mysql   my-4"
                            />
                            <img
                                src={react}
                                alt="react"
                                style={{ width: "9%", height: "9%" }}
                                className="react  my-4"
                            />
                            <img
                                src={tailwind}
                                alt="tailwind"
                                style={{ width: "9%", height: "9%" }}
                                className="tailwind  my-4"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
