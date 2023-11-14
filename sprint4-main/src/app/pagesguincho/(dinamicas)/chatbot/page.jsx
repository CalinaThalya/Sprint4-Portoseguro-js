import Image from "next/image";

export default function Chatbot() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Chatbot</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2">
          <figure className="flex flex-col items-center mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
            <Image src="/img/chatbot.png" alt="imagemchatbot" width={800} height={800} />
            <figcaption className="text-center text-xl font-medium">O ChatBot será a primeira etapa para o início do processo de solicitação de guincho. O segurado deverá enviar mensagens via Telegram informando seus dados básicos como Nome, CPF, RG e número de apólice, em seguida, ele será encaminhado para o GuinchoSeguro, onde deverá selecionar as características que mais se adequal ao seu veículo, para que elas possam ser analisadas antes do envio do guincho.</figcaption>
          </figure>
        </div>

       

        
      </div>
    </div>
  );
}
