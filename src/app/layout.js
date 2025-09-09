import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "App Maricá",
  description: "Aplicação criada com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
