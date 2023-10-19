import React from 'react';

const Calculator = () => {
  return (
    <div className="container flex flex-col items-center justify-start">
      <form className="relative">
        <textarea
          placeholder="3 boiled eggs, 2 chicken wings"
          type="text"
          className=" pl-4 pr-24 py-3 rounded-md shadow-xl w-[300px] md:w-[500px] lg:w-[800px] h-[80px] md:h-[90px]"
        />
        <button className="absolute px-4 py-3 text-lg font-bold text-white -translate-x-20 -translate-y-1/2 rounded-md top-1/2 bg-verdigris">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Calculator;
