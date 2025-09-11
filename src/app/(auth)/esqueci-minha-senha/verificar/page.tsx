"use client"

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
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Verificar = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Check if all OTP fields are filled
        const isFilled = otp.every((digit) => digit !== "");
        setIsButtonEnabled(isFilled);
    }, [otp]);

    const handleInputChange = (index: number, value: string) => {
        // Allow only single digit numbers
        const singleDigit = value.replace(/[^0-9]/g, "").slice(0, 1);

        if (singleDigit.length === 1 && index < 3) {
            // Move focus to next input
            inputRefs.current[index + 1]?.focus();
        }

        const newOtp = [...otp];
        newOtp[index] = singleDigit;
        setOtp(newOtp);
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            // Move focus to previous input on backspace if current is empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isButtonEnabled) {
            router.push("/esqueci-minha-senha/confirmar");
        }
    };

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
                            <h1 className="text-2xl font-bold pt-4">Verifique seu e-mail</h1>
                            <p className="text-sm pt-4">
                                Digite o código de 4 dígitos que você recebeu no seu e-mail
                            </p>
                        </div>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent>
                            <div className="flex flex-row gap-4">
                                {[0, 1, 2, 3].map((index) => (
                                    <Input
                                        key={index}
                                        id={`otp-${index + 1}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={otp[index]}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        ref={(el: any) => (inputRefs.current[index] = el)}
                                        className="w-14 h-14 rounded-lg text-center text-2xl"
                                        required
                                    />
                                ))}
                            </div>

                            <p className="text-sm py-4 ">
                                Se você não recebeu um código! Reenviar
                            </p>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button
                                type="submit"
                                className="w-full cursor-pointer"
                                disabled={!isButtonEnabled}
                            >
                                Continuar
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Verificar;
