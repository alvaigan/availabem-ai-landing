import Image from "next/image";

const Footer = () => {
    return (
        <footer className="h-auto w-full bg-[#F3F4F6]">
            <div className="pt-30 pb-20 px-30 flex flex-col">
                <div className="flex flex-row mb-20">
                    <div className="flex-grow">
                        <div className="flex flex-col w-1/4">
                            <div>
                                <Image src="/logo.png" alt="Logo" width={150} height={0} priority fetchPriority="high" />
                            </div>
                            <div className="text-sm mt-5">Revolucionando as avaliações de RH com IA ética e design empático, inspirado pelos princípios da psicodinâmica do trabalho</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-sm mx-20">
                        <div className="font-medium text-base">Empresa</div>
                        <div>Início</div>
                        <div>Recursos</div>
                        <div>Como Funciona</div>
                        <div>Benefícios</div>
                    </div>
                    <div className="flex flex-col gap-4 text-sm mx-20">
                        <div className="font-medium text-base">Contato</div>
                        <div className="flex flex-row gap-2">
                            <Image src="/mail-black-icon.svg" alt="Logo" width={0} height={0} className="w-5 h-5" priority fetchPriority="high" />
                            <div>contato@availabem.ai</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/phone-icon.svg" alt="Logo" width={0} height={0} className="w-5 h-5" priority fetchPriority="high" />
                            <div>+1 (555) 123-4567</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/pin-icon.svg" alt="Logo" width={0} height={0} className="w-5 h-5" priority fetchPriority="high" />
                            <div>San Francisco, CA</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between border-t-[1.5px] border-gray-300 pt-5">
                    <div>Design feito por Autonomous Intelligence</div>
                    <div>© 2024 AvailaBem-AI. All rights reserved</div>
                    <div className="flex flex-row gap-2">
                        <div>Termos e Condições</div>
                        <div className="text-gray-300">|</div>
                        <div>Política de Privacidade</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
