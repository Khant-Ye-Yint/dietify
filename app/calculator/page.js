import SearchBar from './searchbar';
import DetailTable from './detailTable';
import NutritionList from './nutritionList';

const Calculator = () => {
  return (
    <div className="container flex flex-col items-center justify-start py-5 space-y-5 lg:py-8 md:space-y-7 lg:space-y-10">
      <SearchBar />
      <DetailTable />
      <NutritionList />
    </div>
  );
};

export default Calculator;
