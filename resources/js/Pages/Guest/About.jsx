import React from "react";
import Guest from "@/Layouts/GuestLayout";
import img from "./../../../assets/images/img2.jpg";

function About({ biograpy }) {
    return (
        <>
            <Guest>
                <section
                    id="about"
                    className="text-black  h-full"
                >
                    <div className="container mx-auto h-full flex flex-col justify-center py-32 px-10 md:px-32  text-justify">
                    <div>
                        <h2 className="text-4xl ">CHI SONO</h2>
                    </div>
                        {biograpy.length > 0 ? (
                                 <div className="grid grid-row-2 mt-10">
                                    <div
                                        className="my-5"
                                        dangerouslySetInnerHTML={{
                                            __html: biograpy[0].description,
                                        }}
                                    ></div>

                                    <img
                                        src={img}
                                      
                                        className="rounded-xl"
                                        alt="dasdsad"
                                    />
                                </div>
                         ) : (
                            <div className="h-full flex items-center">
                                <span className="text-4xl">
                                    PRESTO DISPONIBILE! :D
                                </span>
                            </div>
                        )}
                    </div>
                </section>
            </Guest>
        </>
    );
}

export default About;
