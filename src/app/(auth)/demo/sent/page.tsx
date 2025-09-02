import BgFullpage from "@/components/fullpage/bg-fullpage";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import Link from "next/link";

const DemoSent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <BgFullpage />
            <div className="flex flex-col justify-center items-center w-1/3 z-10">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={236}
                        height={0}
                        className="mb-8"
                        priority
                        fetchPriority="high"
                    />{" "}
                </Link>

                <Card className="w-full">
                    <CardContent>
                        <div className="flex flex-col justify-center items-center mt-5 mb-3">
                            <h1 className="text-4xl font-bold pt-4 text-center">
                                Sua solicitação está a caminho!
                            </h1>
                            <p className="text-sm text-center pt-4 text-gray-500">
                                Agradecemos por entrar em contato conosco. Nossa equipe está
                                revisando sua solicitação agora e entrará em contato com você
                                por e-mail em breve para ajudá-lo com os próximos passos
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Link href="/">
                            <Button>Voltar para a página inicial</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default DemoSent;
