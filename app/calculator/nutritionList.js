const NutritionCard = ({ attritube, value }) => {
  return (
    <div className="px-5 py-3 rounded-lg shadow-xl w-[180px] flex flex-col justify-between items-start">
      <h1 className="text-4xl font-obidee">{attritube}</h1>
      <p className="text-lg font-bold text-verdigris">{value}</p>
    </div>
  );
};

const NutritionInfo = ({ attritube, value }) => {
  return (
    <div className="px-5 py-3  w-[180px] md:w-[200px] flex flex-col justify-between items-start">
      <h1 className="text-2xl font-obidee">{attritube}</h1>
      <p className="text-lg">{value}</p>
    </div>
  );
};

const NutritionList = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-5 md:space-y-8">
      <div className="flex flex-col items-center justify-center space-y-1">
        <h1 className="text-6xl font-obidee">Nutrition Facts</h1>
        <div className="w-48 h-1 bg-yellow"></div>
        <p className="text-gray-800">amount per serving</p>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:gap-8 md:grid-cols-3">
        <NutritionCard attritube="Calories" value="515 cal" />
        <NutritionCard attritube="Total Fat" value="3.8 g" />
        <NutritionCard attritube="Cholesterol" value="20 mg" />
        <NutritionCard attritube="Sodium" value="1662 mg" />
        <NutritionCard attritube="Carbs" value="15 mg" />
        <NutritionCard attritube="Protein" value="5.8 mg" />
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap max-w-[800px]">
        <NutritionInfo attritube="Saturated Fat" value="3.8 g" />
        <NutritionInfo attritube="Trans Fat" value="3.8 g" />
        <NutritionInfo attritube="Polyunsaturated Fat" value="3.8 g" />
        <NutritionInfo attritube="Monounsaturated Fat" value="3.8 g" />
        <NutritionInfo attritube="Dietary Fiber" value="3.8 g" />
        <NutritionInfo attritube="Sugar" value="3.8 g" />
        <NutritionInfo attritube="Vitamin D" value="3.8 g" />
        <NutritionInfo attritube="Calcium" value="3.8 g" />
        <NutritionInfo attritube="Caffeine" value="3.8 g" />
        <NutritionInfo attritube="Iron" value="3.8 g" />
        <NutritionInfo attritube="Potassium" value="3.8 g" />
        <NutritionInfo attritube="Vitamin D" value="3.8 g" />
      </div>
    </section>
  );
};

export default NutritionList;
