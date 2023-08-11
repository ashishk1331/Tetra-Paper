import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blog Starter Template",
    description: "Get started with TetraPack and NextJS.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    "prose prose-invert prose-lg mx-auto marker:text-primary p-4 px-8",
                    font.className,
                )}
            >
                {children}
            </body>
        </html>
    );
}
