import BgFullpage from "@/components/fullpage/bg-fullpage";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const Confirmar = () => {
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
                        <div className="flex flex-col">
                            <Link
                                href="/esqueci-minha-senha"
                                className="w-8 h-8 flex flex-col items-center justify-center mb-2 cursor-pointer"
                            >
                                <Image
                                    src="/arrow-back-icon.svg"
                                    alt="Logo"
                                    width={0}
                                    height={0}
                                    className="w-full"
                                    priority
                                    fetchPriority="high"
                                />
                            </Link>
                            <h1 className="text-2xl font-bold pt-4">Criar nova senha</h1>
                            <p className="text-sm pt-4">
                                Defina a nova senha para sua conta para que você possa fazer
                                login e acessar todos os recursos
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Senha</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Confirmar Senha</Label>
                                </div>
                                <Input id="confim-password" type="password" required />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Link href="/esqueci-minha-senha/succeder" className="w-full">
                            <Button type="submit" className="w-full cursor-pointer">
                                Continuar
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Confirmar;
