import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";
import Footer from "@/components/footer/footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AvailaBem-AI",
    description: "AvailaBem-AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.variable} antialiased`}>
                <header>
                    <NavBar />
                </header>

                {children}

                <Footer />
            </body>
        </html>
    );
}
