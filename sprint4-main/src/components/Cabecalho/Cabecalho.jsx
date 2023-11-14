import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="bg-rgb-190-190-202 text-black p-2 flex items-center justify-between h-20">
        <p className="text-2xl font-bold hover:text-blue-500">
          <Link href="/">GuinchoSeguro</Link>
        </p>
        <nav className="cabecalhoo flex items-center">
          <p className="mx-0 text-lg font-serif hover:text-blue-500">
            <Link href="/pagesguincho/home">Home</Link>
          </p>
          <p className="mx-0 text-lg font-serif hover:text-blue-500"> 
            <Link href="/pagesguincho/chatbot">ChatBot</Link>
          </p>
          <p className="mx-0 text-lg font-serif hover:text-blue-500"> 
            <Link href="/pagesguincho/quemsomos">Quem Somos</Link>
          </p>
          <p className="mx-0 text-lg font-serif hover:text-blue-500"> 
            <Link href="/pagesguincho/apipy">Funcionários</Link>
          </p>
         
        </nav>
      </header>
    </div>
  );
}
