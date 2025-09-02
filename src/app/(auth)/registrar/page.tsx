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

const Registrar = () => {
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
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex flex-col items-center justify-center mb-2">
                                <Image
                                    src="/sign-in-icon.svg"
                                    alt="Logo"
                                    width={0}
                                    height={0}
                                    className="w-6 h-6"
                                    priority
                                    fetchPriority="high"
                                />
                            </div>
                            <h1 className="text-2xl font-bold pt-4">Crie sua conta</h1>
                            <p className="text-sm text-center pt-4">Comece em um minuto</p>
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
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seunome@email.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="text-sm">
                                        Senha
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Digite sua senha"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="employee" className="text-sm">
                                        Função
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione seu papel" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Função</SelectLabel>
                                                <SelectItem value="funcionario">Funcionário</SelectItem>
                                                <SelectItem value="gestor">Gestor</SelectItem>
                                                <SelectItem value="administrador">
                                                    Administrador RH
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-sm">
                                        Departamento
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Seu departamento"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-sm">
                                        Cargo
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Seu cargo"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Cadastrar
                        </Button>
                    </CardFooter>
                </Card>
                <div>
                    <p className="text-sm text-center pt-4">
                        Já tem uma conta? &nbsp;
                        <Link
                            href="/entrar"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                        >
                            Faça login aqui
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registrar;
