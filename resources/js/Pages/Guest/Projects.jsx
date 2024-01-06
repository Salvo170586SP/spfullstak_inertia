import React from "react";
import Guest from "@/Layouts/GuestLayout";
import { useSelector } from "react-redux";
 
export default function Projects({ projects }) {
    const dark = useSelector(((state) => state.dark.value))

    return (
        <Guest>
            <section id="projects" className={` ${dark ? 'text-white' : 'text-black'}`}>
                <div className="container mx-auto py-32 px-10 md:px-32">
                    <div className="text-start">
                        <h2 className="text-4xl">PROGETTI</h2>
                        <p>
                            Lista di piccoli progetti demo e lavori che ho
                            creato in base alle skills acquisite.
                        </p>
                    </div>

                    <div className="grid sm:grid-rows md:grid-cols-4  py-10  align-center justify-center">
 
                        {projects.map((project, id) => {
                            return (
                                <a
                                    key={id}
                                    target="_blank"
                                    className="relative group     m-1 cursor-pointer"
                                    href={project.project_url}
                                >
                                    <figure className="object-contain  md:w-full w-100 h-60	 rounded-3xl overflow-hidden shadow-xl hover:shadow  transition hover:scale-95 ">
                                        <img
                                            src={
                                                "http://127.0.0.1:8000/storage/" +
                                                project.project_img
                                            }
                                            alt={project.project_title}
                                            className="w-full object-cover h-full"
                                        />
                                        <div className="absolute  bg-opacity-80  bottom-20  group-hover:opacity-100 opacity-0 transition text-white transparent  bg-black  shadow px-5 py-1 rounded-r-lg ">
                                            <small>
                                                {project.project_title}
                                            </small>
                                        </div>
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
