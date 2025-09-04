import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-auto w-full bg-[#F3F4F6]">
      <div className="pt-30 pb-20 sm:px-10 md:px-30 flex flex-col hidden sm:hidden md:flex">
        <div className="flex flex-row mb-20">
          <div className="flex-grow">
            <div className="flex flex-col w-full lg:w-1/2">
              <div>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={0}
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className="text-sm mt-5">
                Revolucionando as avaliações de RH com IA ética e design
                empático, inspirado pelos princípios da psicodinâmica do
                trabalho
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm mx-20">
            <div className="font-medium text-base">Empresa</div>
            <Link href="#início" className="hover:text-bold hover:text-gray-500">Início</Link>
            <Link href="#recursos" className="hover:text-bold hover:text-gray-500">Recursos</Link>
            <Link href="#como-funciona" className="hover:text-bold hover:text-gray-500">Como Funciona</Link>
            <Link href="#beneficios" className="hover:text-bold hover:text-gray-500">Benefícios</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm mx-20">
            <div className="font-medium text-base">Contato</div>
            <div className="flex flex-row gap-2">
              <Image
                src="/mail-black-icon.svg"
                alt="Logo"
                width={0}
                height={0}
                className="w-5 h-5"
                priority
                fetchPriority="high"
              />
              <div>contato@availabem.ai</div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="/phone-icon.svg"
                alt="Logo"
                width={0}
                height={0}
                className="w-5 h-5"
                priority
                fetchPriority="high"
              />
              <div>+1 (555) 123-4567</div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="/pin-icon.svg"
                alt="Logo"
                width={0}
                height={0}
                className="w-5 h-5"
                priority
                fetchPriority="high"
              />
              <div>San Francisco, CA</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between border-t-[1.5px] border-gray-300 pt-5 text-sm">
          <div>Design feito por Autonomous Intelligence</div>
          <div>© 2024 AvailaBem-AI. All rights reserved</div>
          <div className="flex flex-row gap-2">
            <div>Termos e Condições</div>
            <div className="text-gray-300">|</div>
            <div>Política de Privacidade</div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="pt-5 pb-10 px-10 flex flex-col sm:flex md:hidden text-xs">
        <div className="flex flex-col mb-20">
          <div className="flex flex-col mb-5">
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={223}
                height={0}
                priority
                fetchPriority="high"
              />
            </div>
            <div className="text-sm mt-5">
              Revolucionando as avaliações de RH com IA ética e design empático,
              inspirado pelos princípios da psicodinâmica do trabalho
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-4 text-sm">
              <div className="font-medium text-base">Empresa</div>
              <div>Início</div>
              <div>Recursos</div>
              <div>Como Funciona</div>
              <div>Benefícios</div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div className="font-medium text-base">Contato</div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/mail-black-icon.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-5 h-5"
                  priority
                  fetchPriority="high"
                />
                <div>contato@availabem.ai</div>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/phone-icon.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-5 h-5"
                  priority
                  fetchPriority="high"
                />
                <div>+1 (555) 123-4567</div>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/pin-icon.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-5 h-5"
                  priority
                  fetchPriority="high"
                />
                <div>San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t-[1.5px] border-gray-300 pt-5 gap-5 items-center">
          <div className="flex flex-row gap-2">
            <div>Termos e Condições</div>
            <div className="text-gray-300">|</div>
            <div>Política de Privacidade</div>
          </div>
          <div>© 2025 AvailaBem-AI. All rights reserved</div>
          <div>Design feito por Autonomous Intelligence</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
