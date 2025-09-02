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
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import Link from "next/link";

const Entrar = () => {
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
                            <h1 className="text-2xl font-bold pt-4">
                                Faça login na sua conta
                            </h1>
                            <p className="text-sm text-center pt-4">
                                Acesse sua conta ou cadastre-se para começar
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                                        >
                                            Esqueceu a senha?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Entrar
                        </Button>
                    </CardFooter>
                </Card>
                <div>
                    <p className="text-sm text-center pt-4">
                        Ainda não tem uma conta? &nbsp;
                        <Link
                            href="/registrar"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-600"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Entrar;
