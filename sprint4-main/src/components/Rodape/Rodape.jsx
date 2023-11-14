export default function Rodape() {
  return (
    <div className="min-h-screen flex flex-col p-4 relative">
    

      <footer className="fixed bottom-0 left-0 w-full bg-rgb-190-190-202 h-20 flex items-center justify-between">
        <p className="ml-4 text-black font-medium">Todos os direitos reservados</p>

        <div className="flex items-center space-x-4 mr-4">
          <a href="https://github.com/LeonardoCamargo77/sprint4.git" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/git.png" alt="GitHub" className="h-10 w-10" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/face.png" alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/twitter.png" alt="Twitter" className="h-10 w-10" />
          </a>
          <a href="https://portoseguro.com.br" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/porto3.png" alt="PortoSeguro" className="h-11 w-11" />
          </a>
          <a href="https://sprint4-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black">
            <img src="/img/vercel.png" alt="Vercel" className="h-10 w-10" />
          </a>
        </div>
      </footer>
    </div>
  );
}
