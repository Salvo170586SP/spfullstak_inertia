import "./MyWork.scss";
import img2 from "../../assets/images/progetti/Screenshot2.png";
import img3 from "../../assets/images/progetti/Screenshot3.png";
import img4 from "../../assets/images/progetti/Screenshot4.png";
import img5 from "../../assets/images/progetti/Screenshot5.png";
import img6 from "../../assets/images/progetti/Screenshot6.png";
import img7 from "../../assets/images/progetti/Screenshot7.png";
import { Link } from "@inertiajs/react";

export function MyWork() {

    return (
        <section id="miei-lavori">
            <div className="container mx-auto">
                <div className="text-center my-5">
                    <h2 className="text-3xl ">
                        Progetti su GitHub
                    </h2>
                </div>
                <div className="hidden  md:block mt-10 text-center">
                    <div className="gridc my-5">
                        <div
                            className="box one"
                            style={{ backgroundImage: `url(${img7})` }}
                            data-text="Clone Web App di Spotify"
                        ></div>
                        <div
                            className="box two"
                            style={{ backgroundImage: `url(${img5})` }}
                            data-text="Clone Dropbox"
                        ></div>
                        <div
                            className="box three"
                            style={{ backgroundImage: `url(${img6})` }}
                            data-text="Clone PlayStation"
                        ></div>
                        <div
                            className="box four"
                            style={{ backgroundImage: `url(${img3})` }}
                            data-text="Clone web App di WhatsApp Web"
                        ></div>

                        <div
                            className="box five"
                            style={{ backgroundImage: `url(${img4})` }}
                            data-text="Clone Discord"
                        ></div>
                        <div
                            className="box six"
                            style={{ backgroundImage: `url(${img2})` }}
                            data-text="Clone Netflix"
                        ></div>
                    </div>
                </div>

                <div className=" text-center mt-28">
                    <Link
                        className="px-3 py-2 inline-block bg-gray-500 rounded-lg text-white  hover:scale-95 transition "
                        href={"/projects-page"}
                    >
                        Guarda tutti i miei lavori
                        <i className="fa fa-arrow-right ms-3"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
