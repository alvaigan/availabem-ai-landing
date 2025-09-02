import Image from 'next/image';
import React from 'react';


const FeaturesTimeline = () => {

    return (
        <div className="relative grid grid-cols-2 mx-70 sm:mx-20 md:mx-20 lg:mx-100 mt-10 mb-20">

            <div className="absolute top-0 left-1/2 w-1.5 h-full bg-gradient-to-br from-[#0085FF] to-[#00E113]"></div>


            <div className='sr-none'></div>

            <div className="relative flex flex-col gap-2 px-5 my-10 ml-10 mr-20">
                <div className='absolute top-20 -left-10 w-10 h-1.5 bg-gradient-to-br from-[#0085FF] to-[#00E113]'></div>
                <Image src="/collaborate-group-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                <h2 className="font-bold text-xl bg-gradient-to-r from-[#0085FF] to-[#00E113] bg-clip-text text-transparent">Insights Colaborativos</h2>
                <p>Colete feedback autêntico de stakeholders em toda sua organização</p>
            </div>

            <div className="relative flex flex-col gap-2 px-5 my-10 ml-20 mr-10 justify-end items-end text-right">
                <div className='absolute top-20 -right-10 w-10 h-1.5 bg-gradient-to-br from-[#0085FF] to-[#00E113]'></div>
                <Image src="/brain-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                <h2 className="font-bold text-xl bg-gradient-to-r from-[#0085FF] to-[#00E113] bg-clip-text text-transparent">Análise com IA</h2>
                <p>Agrupamento inteligente e filtragem de temas de feedback</p>
            </div>

            <div className='sr-none'></div>
            <div className='sr-none'></div>

            <div className="relative flex flex-col gap-2 px-5 my-10 ml-10 mr-20">
                <div className='absolute top-20 -left-10 w-10 h-1.5 bg-gradient-to-br from-[#0085FF] to-[#00E113]'></div>
                <Image src="/target-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                <h2 className="font-bold text-xl bg-gradient-to-r from-[#0085FF] to-[#00E113] bg-clip-text text-transparent">Avaliações Personalizadas</h2>
                <p>Gere formulários de avaliação sob medida para qualquer cargo</p>
            </div>
        </div>
    )
};

export default FeaturesTimeline;
