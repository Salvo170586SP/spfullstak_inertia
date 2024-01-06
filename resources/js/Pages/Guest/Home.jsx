import React from "react";
import { Jumbotron } from "@/GuestComponents/Jumbotron";
import { Biography } from "@/GuestComponents/Biography";
import { Skills } from "@/GuestComponents/Skills";
import { MyWork } from "@/GuestComponents/MyWork";
import Guest from "@/Layouts/GuestLayout";
import { useEffect } from "react";

function Home() {
    /*      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const arrow = document.getElementById("up");
        console.log('scrolled: ' + scrolled);


        //se lo scroll arriva a 399
        if (Math.ceil(scrolled) > 399) {

            //aggiungo la classe show
            arrow.classList.add("show");

        } else if (Math.ceil(scrolled) < 399) {
            //altrimenti se è minore tolgo la classe show
            arrow.classList.remove("show");
        }
    }); */
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
 
            const arrow = document.getElementById("up");

            // Se lo scroll arriva a 399
            if (scrolled > 399) {
                // Aggiungi la classe show
                arrow.classList.add("show");
            } else {
                // Altrimenti, se è minore, rimuovi la classe show
                arrow.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Pulizia dell'evento scroll al momento della disattivazione del componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Guest>
            <Jumbotron />
            <Biography />
            <Skills />
            <MyWork />
            <div id="up">
                <a className="link-up" href="#">
                    <i className="fa-solid fa-chevron-up fa-2x bg-slate-500 rounded-3xl arrow-icon"></i>
                </a>
            </div>
        </Guest>
    );
}

export default Home;
