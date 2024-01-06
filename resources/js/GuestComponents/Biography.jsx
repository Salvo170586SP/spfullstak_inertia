import { Link } from "@inertiajs/react";
import imgBio from "../../assets/images/IMG_20210314_104826.jpg";
import "./Biograpy.scss";
export function Biography() {
    return (
        <section
            id="biography"
            className="flex justify-center items-center relative"
            style={{ backgroundImage: `url(${imgBio})` }}
        >
            <p className="text-1xl md:text-4xl p-10 md:px-32 z-10 text-white font-bold ">
                <blockquote>
                    <p>
                        'Viaggiare è camminare verso l'orizzontee, incontrare
                        l'altro, conoscere, scoprire e tornare più ricchi di
                        quando si era inizato il cammino'
                    </p>
                    <br />
                    <cite>Luis Sepùlveda</cite>
                </blockquote>
            </p>
            <div className="flex flex-col items-center justify-center absolute bottom-0 right-0 left-0 p-3">
                <Link
                    className="flex z-10 justify-center text-white text-xl items-center bg-gray-500 px-3 mb-5 py-2 rounded-lg  text-slate-4 transition hover:scale-95"
                    href="/about-page"
                >
                    Scopri di più
                    <i className="fa fa-arrow-right fa-fw ms-2"></i>
                </Link>
            </div>

            <div className="gradient"></div>
        </section>
    );
}
