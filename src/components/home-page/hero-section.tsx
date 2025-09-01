import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="inicio" className="min-h-screen bg-[#C6ECFA] relative overflow-hidden">
            <Image src="/hero-bg.svg" alt="Logo" width={0} height={0} className="absolute w-full h-auto -bottom-1 md:object-fill sm:object-none sm:scale-200 md:scale-100 sm:object-center" priority fetchPriority="high" />
            <div className="min-h-screen absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0085FF00] from-50% to-[#0D56FF] to-150% "></div>


            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-[#0085FF] to-[#00E113] text-white">
                        <Image src="/lighting-icon.svg" alt="Logo" width={0} height={0} className="w-5 h-5 inline me-2" /> Revolução de RH com IA
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                     Revolucione Avaliações
                    <br />
                    de RH com IA e Empatia
                </h1>

                <p className="text-sm md:text-base mb-8 max-w-3xl leading-relaxed opacity-90">
                    Crie avaliações de desempenho justas e éticas inspiradas na psicodinâmica do trabalho de Christophe
                    Dejours. Colete insights colaborativamente, analise com IA e gere formulários de avaliação personalizados
                    para aumentar a saúde mental e produtividade da organização.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        variant="default"
                        size="lg"
                    >
                        Começar Teste Grátis
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                    >
                        Ver Demonstração
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
