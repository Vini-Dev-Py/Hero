import { SocketProvider } from "@/contexts/SocketContext";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Talk to Me!",
    description: "Projeto desenvolvido na Semana do Herói 3ª Edição da Hero Code",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${rubik.className} bg-black text-white`}>
                <SocketProvider>
                    {children}
                </SocketProvider>
            </body>
        </html>
    );
}
