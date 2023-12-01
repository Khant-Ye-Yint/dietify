const Info = () => {
  return (
    <section className="py-[15vh] flex flex-row justify-around items-center flex-wrap gap-20">
      <div className="flex flex-col items-center justify-start shadow-lg w-[500px] h-[300px] ">
        <div className="w-full h-40 bg-center bg-no-repeat bg-cover bg-thai-food">
          <div className="flex items-center justify-center w-full h-full backdrop-brightness-50 backdrop-blur-sm">
            <h1 className="text-4xl text-center text-white font-lobster">
              Over 1 Million food items
            </h1>
          </div>
        </div>
        <div className="p-10">
          <p className="text-base text-center font-montserrat">
            917,860 items from 45,178 grocery brands, 189,974 items from 868
            restaurants, 10,428 Common Food Tags mapped to 38,706 Common Food
            Phrases
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start shadow-lg w-[500px] h-[300px] ">
        <div className="w-full h-40 bg-center bg-no-repeat bg-cover bg-typing-robot">
          <div className="flex items-center justify-center w-full h-full backdrop-brightness-50 backdrop-blur-sm">
            <h1 className="text-4xl text-center text-white font-lobster">
              Natural Language
            </h1>
          </div>
        </div>
        <div className="p-10">
          <p className="text-base text-center font-montserrat">
            Turn spoken text into precise nutrition analysis with our
            state-of-the-art natural language functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
