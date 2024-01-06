import "./MyWork.scss";
import img2 from "../../assets/images/progetti/Screenshot2.png";
import img3 from "../../assets/images/progetti/Screenshot3.png";
import img4 from "../../assets/images/progetti/Screenshot4.png";
import img5 from "../../assets/images/progetti/Screenshot5.png";
import img6 from "../../assets/images/progetti/Screenshot6.png";
import img7 from "../../assets/images/progetti/Screenshot7.png";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

export function MyWork() {
    const dark = useSelector(((state) => state.dark.value))

    return (
        <section id="miei-lavori" className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="container mx-auto">
                <div className="text-center my-5">
                    <h2 className="text-3xl ">
                        Progetti su GitHub
                    </h2>
                </div>
                <div className="hidden  md:block mt-10 text-center ">
                    <div className={`gridc my-5 ${dark ? 'bg-black' : 'bg-white'}`}>
                        <div
                            className={`box one  ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
                            style={{ backgroundImage: `url(${img7})`}}
                            data-text="Clone Web App di Spotify"
                        ></div>
                        <div
                            className={`box two ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
                            style={{ backgroundImage: `url(${img5})` }}
                            data-text="Clone Dropbox"
                        ></div>
                        <div
                            className={`box three ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
                            style={{ backgroundImage: `url(${img6})` }}
                            data-text="Clone PlayStation"
                        ></div>
                        <div
                            className={`box four ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
                            style={{ backgroundImage: `url(${img3})` }}
                            data-text="Clone web App di WhatsApp Web"
                        ></div>

                        <div
                            className={`box five ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
                            style={{ backgroundImage: `url(${img4})` }}
                            data-text="Clone Discord"
                        ></div>
                        <div
                            className={`box six ${dark ? 'border border-gray-800' : 'border border-gray-200'} shadow-md hover:shadow-lg rounded-3xl  `}
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
