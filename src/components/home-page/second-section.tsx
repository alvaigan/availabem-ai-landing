import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturesTimeline from "./features-timeline";

const SecondSection = () => {
  return (
    <section id="recursos" className="h-full bg-white relative scroll-mt-20 flex flex-col items-center justify-center">
      {/*  gradient blur component */}
      <div className="absolute -top-5 -left-100 w-[670px] h-[670px] bg-[#01ADEC] rounded-full blur-[80px] opacity-50"></div>

      <div className="flex flex-col mt-35 items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Otimize o Ecossistema de Feedback
          <br />
          da Sua Empresa
        </h1>
        <div>
          <p className="text-sm md:text-base mb-8 max-w-3xl opacity-90">
            Aproveite insights colaborativos, análises impulsionadas por IA e
            avaliações personalizadas para aprimorar o desempenho da sua equipe
          </p>
        </div>
      </div>
      <FeaturesTimeline />
    </section>
  );
};

export default SecondSection;
