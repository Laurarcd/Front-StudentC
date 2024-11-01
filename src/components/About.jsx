import React from 'react'

const About = () => {
  return (

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <img src="Carpool.jpg"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="px-4">
                            <h2 className="text-2xl text-primary font-bold mt-0 mb-2">¿Cómo funciona Student Connect? </h2>
                            <h3 className="text-xl font-bold mt-4 mb-2">Why Choose Us?</h3>
                            <div className="list-disc space-y-2 pl-5">
                                <div className="text-base">Lorem ipsum dolor sit amet</div>
                                <div className="text-base">Tempor incididunt ut labore</div>
                                <div className="text-base">Lorem ipsum dolor sit amet</div>
                                <div className="text-base">Incididunt ut labore</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default About;
