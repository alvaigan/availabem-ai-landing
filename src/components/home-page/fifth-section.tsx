import Image from "next/image";
import { Button } from "../ui/button";

const FifthSection = () => {
    return (
        <section className="h-[200px] relative scroll-mt-20 flex items-center justify-center">
            <div className="absolute w-[80%] top-10 h-[340px] bg-gradient-to-br from-[#B6E3FB] to-[#72AAFC] z-10 mx-30 rounded-2xl">
            <Image src="/bg-image-panel.svg" alt="Background Image" width={0} height={0} className="absolute size-full md:object-cover sm:object-none sm:scale-200 md:scale-100 sm:object-center" priority fetchPriority="high" />
                <div className="flex flex-col items-center justify-center mt-15 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
                        Pronto para revolucionar suas <br /> avaliações de RH?
                    </h1>
                    <div>
                        <p className="text-sm md:text-base mb-8 max-w-3xl opacity-90 font-normal">
                            Junte-se a empresas inovadoras que priorizam gestão de desempenho justa, ética e eficaz para aumentar a saúde mental e produtividade organizacional
                        </p>
                    </div>
                    <Button variant="outline" size="lg">Ver Demonstração</Button>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
