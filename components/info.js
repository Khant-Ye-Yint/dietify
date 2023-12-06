const Info = ({ infoProps }) => {
  return (
    <section className="py-[15vh] flex flex-row justify-around items-center flex-wrap gap-20">
      <div className="flex flex-col items-center justify-start shadow-lg w-[500px] h-[300px] ">
        <div className="w-full h-40 bg-center bg-no-repeat bg-cover bg-thai-food">
          <div className="flex items-center justify-center w-full h-full backdrop-brightness-50 backdrop-blur-sm">
            <h1 className="text-4xl text-center text-white font-lobster">
              {infoProps.foodItems}
            </h1>
          </div>
        </div>
        <div className="p-10">
          <p className="text-base leading-7 text-center font-montserrat">
            {infoProps.foodParagraph}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start shadow-lg w-[500px] h-[300px] ">
        <div className="w-full h-40 bg-center bg-no-repeat bg-cover bg-typing-robot">
          <div className="flex items-center justify-center w-full h-full backdrop-brightness-50 backdrop-blur-sm">
            <h1 className="text-4xl text-center text-white font-lobster">
              {infoProps.naturalLanguage}
            </h1>
          </div>
        </div>
        <div className="p-10">
          <p className="text-base leading-7 text-center font-montserrat">
            {infoProps.naturalLanguageParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
