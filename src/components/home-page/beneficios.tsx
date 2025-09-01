import Image from "next/image";

const Beneficios = () => {

    const beneficios = [
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
        {
            title: "Justiça e Ética",
            description: "Baseado nos princípios de Christophe Dejours, garantindo que as avaliações respeitem a dignidade humana e promovam o bem-estar psicológico",
            icon: "/mail-icon.svg"
        },
    ]

    return (
        <div className="w-full h-[600px]">
            <div className="grid grid-cols-3 mx-80">
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
        </div>
    );
};

export default Beneficios;