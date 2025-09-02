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

const Demo = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <BgFullpage />
            <div className="flex flex-col justify-center items-center w-100 z-10">
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
                    <CardHeader>
                        <div className="flex flex-col justify-center items-center mt-5 mb-3">
                            <h1 className="text-2xl font-bold pt-4 text-center">
                                Solicite uma demonstração do AvaliaBem-AI
                            </h1>
                            <p className="text-sm text-center pt-4">
                                O AvaliaBem-AI ajuda você a construir uma equipe de alto
                                desempenho, orientando inteligentemente seu talento desde a
                                contratação até a gestão.
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-sm">
                                        Nome Completo
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Seu nome completo"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-sm">
                                        Email de Trabalho
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seunome@email.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone-number" className="text-sm">
                                        Número de Telefone
                                    </Label>
                                    <Input
                                        id="phone-number"
                                        type="tel"
                                        placeholder="Seu número de telefone"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="company" className="text-sm">
                                        Nome da Empresa
                                    </Label>
                                    <Input
                                        id="company"
                                        type="text"
                                        placeholder="O nome da sua empresa"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="employee" className="text-sm">
                                        Tamanho da Empresa
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o tamanho da empresa" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Tamanho da Empresa</SelectLabel>
                                                <SelectItem value="1">1-20 employees </SelectItem>
                                                <SelectItem value="2">21-50 employees</SelectItem>
                                                <SelectItem value="3">51-100 employees</SelectItem>
                                                <SelectItem value="4">101-200 employees</SelectItem>
                                                <SelectItem value="5">100+ employees</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Link href="/demo/sent" className="w-full">
                            <Button type="submit" className="w-full">
                                Solicitar uma demonstração
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Demo;
