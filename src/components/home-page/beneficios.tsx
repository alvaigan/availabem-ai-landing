import Image from "next/image";

const Beneficios = () => {

    const beneficios = [
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/shield-icon.svg"
        },
        {
            title: "Confidencialidade Completa",
            description: "Coleta anônima de feedback protege stakeholders enquanto garante insights honestos e imparciais",
            icon: "/eye-icon.svg"
        },
        {
            title: "Insights Reais",
            description: "Análise com IA revela padrões genuínos enquanto filtra expectativas que promovem burnout ou são prejudiciais à saúde mental",
            icon: "/bulb-icon.svg"
        },
        {
            title: "Orientado por Stakeholders",
            description: "Avaliações baseadas na sabedoria coletiva de pares, gestores e membros da equipe que entendem o cargo",
            icon: "/people-group-icon.svg"
        },
        {
            title: "Eficiente no Tempo",
            description: "Automatize o processo complexo de criar avaliações justas, economizando centenas de horas das equipes de RH",
            icon: "/stopwatch-icon.svg"
        },
        {
            title: "Personalizado e Escalável",
            description: "Formulários de avaliação sob medida para qualquer cargo, desde cargos iniciantes até executivos, em todos os departamentos",
            icon: "/user-circle-gear-icon.svg"
        },
    ]

    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-3 mx-5 md:mx-10 lg:mx-30 hidden sm:hidden md:grid">
                {beneficios.map((beneficio, index) => {
                    return (
                        <div key={index} className="pt-10 pb-25 px-5 hover:shadow-2xl hover:shadow-[#91FF9A] transition-all duration-300 border border-sm border-gray-300 cursor-pointer">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                                <Image src={beneficio.icon} alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                            </div>
                            <h2 className="font-semibold text-xl">{beneficio.title}</h2>
                            <p>{beneficio.description}</p>
                        </div>
                    )
                })}
            </div>


            {/* Mobile */}
            <div className="grid grid-cols-1 md:hidden ">
                {beneficios.map((beneficio, index) => {
                    return (
                        <div key={index} className="pt-10 pb-5 px-5 hover:shadow-2xl hover:shadow-[#91FF9A] transition-all duration-300 border border-sm border-gray-300 cursor-pointer">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                                <Image src={beneficio.icon} alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                            </div>
                            <h2 className="font-semibold text-xl mt-10 mb-5">{beneficio.title}</h2>
                            <p>{beneficio.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Beneficios;
