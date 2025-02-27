const Home = () => {
    return (
      <div>
            <div className="p-6 flex flex-row items-center justify-center gap-6">
                <img src="/src/assets/home_l_escuro.png" alt="Foto de Home" width="500px" />
                <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold text-white mb-5">
                    Bem-vindo à sua academia para todas as horas!
                </h1>
                <p className="text-2xl text-white mt-25 ml-20">
                Acesse aqui seus treinos personalizados a partir de seu IMC.
            </p>    
            </div>
        </div>

      </div>
    );
  };
  
  export default Home;
  