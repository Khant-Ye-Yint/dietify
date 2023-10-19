import React from 'react';

const Calculator = () => {
  return (
    <div className="container flex flex-col items-center justify-start space-y-5 md:space-y-7 lg:space-y-10">
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
      <div className="overflow-x-auto w-[350px] md:w-[700px] lg:w-[800px]">
        <table className="w-full text-left border-separate table-auto border-spacing-5">
          <thead className="text-xl font-lobster">
            <tr>
              <th></th>
              <th>qty</th>
              <th>unit</th>
              <th>food</th>
              <th>calories</th>
              <th>weight</th>
              <th>food group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="w-[50px] h-[50px] bg-black"></div>
              </td>
              <td>3</td>
              <td>drummette</td>
              <td className="font-bold text-verdigris">chicken wings</td>
              <td>263.21 cal</td>
              <td>80.37 g</td>
              <td>combination</td>
            </tr>
            <tr>
              <td>
                <div className="w-[50px] h-[50px] bg-black"></div>
              </td>
              <td>3</td>
              <td>drummette</td>
              <td className="font-bold text-verdigris">chicken wings</td>
              <td>263.21 cal</td>
              <td>80.37 g</td>
              <td>combination</td>
            </tr>
            <tr>
              <td>
                <div className="w-[50px] h-[50px] bg-black"></div>
              </td>
              <td>3</td>
              <td>drummette</td>
              <td className="font-bold text-verdigris">chicken wings</td>
              <td>263.21 cal</td>
              <td>80.37 g</td>
              <td>combination</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
