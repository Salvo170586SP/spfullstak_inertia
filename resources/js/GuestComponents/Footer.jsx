import { Link } from "@inertiajs/react";
import logo from "../../assets/images/icon/logo2.png";

export function Footer() {
    return (
        <footer
            style={{ backgroundColor: "#0000" }}
            /* style={{ backgroundColor: "#131418" }} */
            className="text-black p-5 border-t"
        >
            <div className="container mx-auto  py-10">
                <div className="md:grid grid-cols-2  items- sm:flex">
                    <div className="md:flex items-start  text-sm hidden ">
                        <img
                            src={logo}
                            width={50}
                            className="  logo-follow"
                            alt="logo-github"
                        />

                        <small className="max-w-[350px] mx-2">
                            Sul mio profilo
                            <a
                                href="https://github.com/Salvo170586SP"
                                target="”_blank”"
                            >
                                <strong className="mx-1">GitHub</strong>
                            </a>
                            puoi seguire i miei progetti, darmi consigli, o
                            collaborare insieme su nuove idee.
                        </small>
                    </div>
                    <div className=" text-sm flex flex-col items-start md:items-end">
                        <div className="flex   justify-start md:justify-end">
                            <small className="my-2">Seguimi anche su:</small>
                            <a
                                href="https://www.linkedin.com/in/salvatore-pitanza-701735191/"
                                target="”_blank”"
                            >
                                <i className="fa-brands fa-linkedin fa-2x mx-2"></i>
                            </a>
                            <a
                                className="mx-2"
                                href="https://www.instagram.com/salvo.pitanza_creative/"
                                target="”_blank”"
                            >
                                <i className="fa-brands fa-instagram fa-2x"></i>
                            </a>
                        </div>
                            <div>
                                <small>
                                    2024 - Realizzato da Salvatore Pitanza con
                                    Laravel Inertia ReactJs
                                </small>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
