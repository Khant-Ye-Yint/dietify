'use client';

import { useState } from 'react';
import Image from 'next/image';

import SearchBar from './searchbar';
import DetailTable from './detailTable';
import NutritionList from './nutritionList';

import LoadingImg from '../../public/loading.png';

const Calculator = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  return (
    <div className="container flex flex-col items-center justify-start py-5 space-y-5 lg:py-8 md:space-y-7 lg:space-y-10">
      <SearchBar
        setData={setData}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        setIsFetched={setIsFetched}
      />
      {isError ? (
        <h1>
          Check your spelling or your input contains foods that we do not
          support yet.
        </h1>
      ) : (
        isFetched &&
        (isLoading ? (
          <div className="relative w-13 h-13 animate-spin">
            <Image
              src={LoadingImg}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        ) : (
          <>
            <DetailTable data={data} />
            <NutritionList data={data} />
          </>
        ))
      )}
    </div>
  );
};

export default Calculator;
