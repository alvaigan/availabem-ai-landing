import Beneficios from "./beneficios";

const FourthSection = () => {
    return (
        <section id="benefícios" className="min-h-screen bg-white relative scroll-mt-20 mb-5 mx-5">
            <div className="flex flex-col mt-5 lg:mt-20 items-center justify-center relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                    Por que Escolher AvaliaBem-AI?
                </h1>
                <div>
                    <p className="text-sm md:text-base mb-8 max-w-3xl opacity-90">
                        Transforme seus processos de RH com IA ética que coloca as pessoas em primeiro lugar
                    </p>
                </div>
                <Beneficios />
            </div>
        </section>
    );
};

export default FourthSection;
