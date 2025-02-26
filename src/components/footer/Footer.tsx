import {
    FacebookLogo,
    GithubLogo,
    LinkedinLogo,
    MathOperations,
  } from "@phosphor-icons/react";
  import { Envelope } from "@phosphor-icons/react/dist/ssr";
  
  function Footer() {
    const data = new Date().getFullYear();
  
    return (
      <div className="bg-[#D32F2F] text-white">
      <div className="container mx-auto py-6 flex items-center justify-between px-8">
        
        {/* Ícone à esquerda */}
        <a href="/home">
          <img src="/src/assets/fogo_icon.png" alt="Ícone de fogo" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
        </a>
    
        <div className="text-center ml-30">
        <p className="text-2xl font-bold">Burning Gym</p>
        <p className="text-4x1">Copyright © codArte : {data}</p>
        </div>
    
        <div className="flex flex-col items-center">
        <p className="text-lg mb-2">Acesse nossas redes sociais</p>
        <div className="flex gap-6">
          <LinkedinLogo size={40} weight="bold" className="hover:scale-110 hover:text-gray-300 transition-transform duration-300"/>
          <FacebookLogo size={40} weight="bold" className="hover:scale-110 hover:text-gray-300 transition-transform duration-300" />
          <a href="https://github.com/Projeto-Integrador01" target="_blank">
            <GithubLogo size={40} weight="bold" className="hover:scale-110 hover:text-gray-300 transition-transform duration-300" />
          </a>
          <a href="mailto:grupo1generation79@gmail.com?subject=Assunto%20do%20email&body=Mensagem%20aqui" target="_blank">
            <Envelope size={40} weight="bold" className="hover:scale-110 hover:text-gray-300 transition-transform duration-300" />
          </a>
          <a href="https://doi.org/10.1590/S0034-89101992000600009" target="_blank">
            <MathOperations size={40} weight="bold" className="hover:scale-110 hover:text-gray-300 transition-transform duration-300"/>
          </a>
        </div>
        </div>
    
      </div>
    </div>
    
    );
  }
  
  export default Footer;
  