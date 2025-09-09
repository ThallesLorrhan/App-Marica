// components/Header.js
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white ">
      <div className="max-w-4xl flex flex-row items-center p-1">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Maricá"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>

        <div className="">
          <h1 className="text-4xl font-bold "  style={{ color: "#2196F3" }}>
            Maricá Conecta
          </h1>
        </div>
      </div>
    </header>
  );
}
