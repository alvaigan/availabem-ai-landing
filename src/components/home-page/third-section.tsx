import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturesTimeline from "./features-timeline";
import ComoFunciona from "./como-functio";

const ThirdSection = () => {
    return (
        <section id="como-funciona" className="h-auto bg-white relative scroll-mt-20 overflow-hidden">
            {/*  gradient blur component */}
            <div className="absolute top-20 sm:top-1/2 md:top-10 -right-50 w-[438px] h-[438px] bg-[#01ADEC] rounded-full blur-[80px] opacity-30 z-0"></div>

            <div className="flex flex-col mx-5 sm:10 md:mx-10 lg:mx-30 mt-10 sm:mt-10 md:mt-10 lg:mt-35  z-10 relative">
                <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between text-center sm:text-center md:text-left">
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                            Como Funciona
                        </h1>
                        <div>
                            <p className="text-sm md:text-base mb-8 max-w-3xl opacity-90">
                                Nosso processo simples de 4 etapas transforma insights de stakeholders em ferramentas de avaliação justas e abrangentes
                            </p>
                        </div>
                    </div>

                    <div>
                        <Button variant="default" size={"lg"}>Começar Seu Primeiro Fluxo</Button>
                    </div>
                </div>

                <ComoFunciona />

            </div>
        </section>
    );
};

export default ThirdSection;
