import { useSelector } from "react-redux";
import imgJumb from "../../assets/images/SL-011719-17920-65.jpg";
import "./Jumbotron.scss";

export function Jumbotron() {
    const dark = useSelector(((state) => state.dark.value))

    return (
        <section
            id="jumbotron"
            className="h-screen text-black "
            style={{ backgroundImage: `url(${imgJumb})`, filter: `invert(${dark ? '1':'0' })` }}
        >
            <div className="flex justify-center text-jumb ">
                <div className=" flex flex-col items-center">
                    <div className=" text-center px-10 md:px-32 ">
                        <h1 className="text-6xl ">Salvatore Pitanza</h1>
                        <h4 className="">JR. WEB DEVELOPER FULLSTACK</h4>
                        <br />
                        <p className="text-center">
                            Benvenuto nella pagina dedicata al mio portfolio.{" "}
                            <br />
                            Le mie passioni, le mie competenze ed anche un pò
                            della mia vita oltre il coding.
                            <br />
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="flex flex-col items-center tex-button-jumb">
                        <small className="lh-lg text-center mb-4 ">
                            Scopri le mie competenze nel mondo dello sviluppo
                            web
                        </small>
                        <a className="text-light" href="#competenze">
                            <i className="fa-solid fa-chevron-down fa-2x arrow-icon bounce"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
