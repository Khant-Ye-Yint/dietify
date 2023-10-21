'use client';
import { useState, useEffect } from 'react';

const NutritionCard = ({ attritube, value }) => {
  return (
    <div className="px-5 py-3 rounded-lg shadow-xl w-[160px] md:w-[180px] flex flex-col justify-between items-start">
      <h1 className="text-4xl font-obidee">{attritube}</h1>
      <p className="text-lg font-bold text-verdigris">{value}</p>
    </div>
  );
};

const NutritionInfo = ({ attritube, value }) => {
  return (
    <div className="px-5 py-3  w-[160px] md:w-[200px] flex flex-col justify-between items-start">
      <h1 className="text-2xl font-obidee">{attritube}</h1>
      <p className="text-lg">{value}</p>
    </div>
  );
};

const NutritionList = ({ data }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    let nutrients = {
      calories: 0,
      totalFat: 0,
      cholesterol: 0,
      sodium: 0,
      carbs: 0,
      protein: 0,
      saturatedFat: 0,
      transFat: 0,
      alcohol: 0,
      dietaryFiber: 0,
      sugar: 0,
      vitaminD: 0,
      calcium: 0,
      caffeine: 0,
      iron: 0,
      potassium: 0,
      zinc: 0,
      water: 0,
    };

    data.forEach((chunk) => {
      nutrients.calories += chunk.nf_calories;
      nutrients.totalFat += chunk.nf_total_fat;
      nutrients.cholesterol += chunk.nf_cholesterol;
      nutrients.sodium += chunk.nf_sodium;
      nutrients.carbs += chunk.nf_total_carbohydrate;
      nutrients.protein += chunk.nf_protein;
      nutrients.saturatedFat += chunk.nf_saturated_fat;
      nutrients.dietaryFiber += chunk.nf_dietary_fiber;
      nutrients.potassium += chunk.nf_potassium;
      nutrients.sugar += chunk.nf_sugars;

      const transFat = chunk.full_nutrients.find(
        (element) => element.attr_id === 605
      );

      transFat !== undefined && (nutrients.transFat += transFat.value);

      nutrients.caffeine += chunk.full_nutrients.find(
        (element) => element.attr_id == 262
      ).value;
      nutrients.alcohol += chunk.full_nutrients.find(
        (element) => element.attr_id == 221
      ).value;
      nutrients.water += chunk.full_nutrients.find(
        (element) => element.attr_id == 255
      ).value;
      nutrients.zinc += chunk.full_nutrients.find(
        (element) => element.attr_id == 309
      ).value;
      nutrients.calcium += chunk.full_nutrients.find(
        (element) => element.attr_id == 301
      ).value;
      nutrients.iron += chunk.full_nutrients.find(
        (element) => element.attr_id == 303
      ).value;
    });

    Object.keys(nutrients).forEach((nutrient) => {
      nutrients[nutrient] = +nutrients[nutrient].toFixed(2);
    });

    setInfo(nutrients);
    console.log(nutrients);
  }, []);
  return (
    <section className="flex flex-col items-center justify-center space-y-5 md:space-y-8">
      <div className="flex flex-col items-center justify-center space-y-1">
        <h1 className="text-6xl font-obidee">Nutrition Facts</h1>
        <div className="w-48 h-1 bg-yellow"></div>
        <p className="text-gray-800">amount per serving</p>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:gap-8 md:grid-cols-3">
        <NutritionCard attritube="Calories" value={`${info.calories} cal`} />
        <NutritionCard attritube="Total Fat" value={`${info.totalFat} g`} />
        <NutritionCard
          attritube="Cholesterol"
          value={`${info.cholesterol} mg`}
        />
        <NutritionCard attritube="Sodium" value={`${info.sodium} mg`} />
        <NutritionCard attritube="Carbs" value={`${info.carbs} cal`} />
        <NutritionCard attritube="Protein" value={`${info.protein} mg`} />
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap max-w-[800px]">
        <NutritionInfo
          attritube="Saturated Fat"
          value={`${info.saturatedFat} g`}
        />
        <NutritionInfo attritube="Trans Fat" value={`${info.transFat} g`} />
        <NutritionInfo attritube="Alcohol" value={`${info.alcohol} g`} />
        <NutritionInfo attritube="Water" value={`${info.water} g`} />
        <NutritionInfo
          attritube="Dietary Fiber"
          value={`${info.dietaryFiber} g`}
        />
        <NutritionInfo attritube="Sugar" value={`${info.sugar} g`} />
        <NutritionInfo attritube="Vitamin D" value={`${info.vitaminD} IU`} />
        <NutritionInfo attritube="Calcium" value={`${info.calcium} mg`} />
        <NutritionInfo attritube="Caffeine" value={`${info.caffeine} mg`} />
        <NutritionInfo attritube="Iron" value={`${info.iron} mg`} />
        <NutritionInfo attritube="Potassium" value={`${info.potassium} mg`} />
        <NutritionInfo attritube="Zinc" value={`${info.zinc} g`} />
      </div>
    </section>
  );
};

export default NutritionList;
