const Home = () => {
    return (
      <div>
            <div className="p-6 flex flex-row items-center justify-center gap-6">
                <img src="/src/assets/foto_home.svg" alt="Foto de Home" width="500px" />
                <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold text-white mb-5">
                    Bem-vindo à sua academia para todas as horas!
                </h1>
                <p className="text-2xl text-white mt-25 ml-60">
                Acesse aqui seus treinos.
            </p>    
            </div>
        </div>

      </div>
    );
  };
  
  export default Home;
  