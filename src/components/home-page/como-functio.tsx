import Image from "next/image";

const ComoFunciona = () => {
    return (
        <div className="my-40 relative">
            <div className="absolute z-0 left-65 -top-5 scale-120">
                <Image src="/linewave.svg" alt="Logo" width={0} height={0} className="w-full h-auto" priority fetchPriority="high" />
            </div>
            <div className="flex flex-row items-center justify-center text-center gap-10 z-10 relative">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                        <Image src="/people-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                    </div>
                    <h2 className="font-semibold text-xl">Inserir Detalhes do Cargo</h2>
                    <p>Insira nome da empresa, departamento, cargo e lista de stakeholders com emails e nomes.</p>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                            <Image src="/mail-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                        </div>
                        <h2 className="font-semibold text-xl">Enviar Pesquisas</h2>
                        <p>E-mails profissionais são enviados perguntando sobre o que faz um bom e admirável profissional.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                            <Image src="/stars-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                        </div>
                        <h2 className="font-semibold text-xl">Análise por IA</h2>
                        <p>IA agrupa temas, filtra padrões prejudiciais e classifica KPIs vs características subjetivas.</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0085FF] to-[#91FF9A] rounded-3xl flex flex-col items-center justify-center mb-5 shadow-2xl shadow-[#9672FF]">
                            <Image src="/doc-icon.svg" alt="Logo" width={0} height={0} className="w-10 h-10" priority fetchPriority="high" />
                        </div>
                        <h2 className="font-semibold text-xl">Receber Formulário Personalizado</h2>
                        <p>Receba um formulário de avaliação estruturado com categorias, perguntas e escalas de classificação.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComoFunciona;
