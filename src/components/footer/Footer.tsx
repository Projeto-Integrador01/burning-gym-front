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
        <div className="container mx-auto py-6 flex flex-col items-center">
          <p className="text-xl font-bold text-center">
            RH Sistema | Copyright: {data}
          </p>
          <p className="text-lg text-center mb-4">Acesse nossas redes sociais</p>
          <div className="flex gap-8 justify-center">
            <LinkedinLogo size={48} weight="bold" className= "hover:scale-110 hover:text-gray-300 transition-transform duration-300"/>
            <FacebookLogo size={48} weight="bold" className= "hover:scale-110 hover:text-gray-300 transition-transform duration-300" />
            <a href="https://github.com/Projeto-Integrador01" target="_blank">
            <GithubLogo size={48} weight="bold" className= "hover:scale-110 hover:text-gray-300 transition-transform duration-300" /></a>
            <a href="mailto:grupo1generation79@gmail.com?subject=Assunto%20do%20email&body=Mensagem%20aqui" target="_blank">
            <Envelope size={48} weight="bold" className= "hover:scale-110 hover:text-gray-300 transition-transform duration-300" /></a>
            <a href="https://doi.org/10.1590/S0034-89101992000600009" target="_blank">
            <MathOperations size={48} weight="bold" className= "hover:scale-110 hover:text-gray-300 transition-transform duration-300"/></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  