'use client';

import Image from 'next/image';
import { Link } from '../navigation';

import FoodImg from '../public/testPic.png';
import MouseImg from '../public/mouse.png';
import useLocale from '@/hooks/useLocale';

const Hero = ({ translations }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const locale = useLocale();

  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-between h-full min-h-[80vh]">
        <section className="flex flex-col flex-1 space-y-7 md:space-y-10">
          <h1
            className={` ${
              locale === 'en'
                ? 'text-6xl md:text-7xl'
                : 'text-4xl leading-[70px]'
            } text-start font-lobster`}
          >
            {translations.title}
          </h1>
          <p className="text-lg font-montserrat">{translations.paragraph}</p>
          <div className="flex flex-row justify-start space-x-5">
            <button className="button bg-yellow" onClick={scrollToAbout}>
              {translations.buttonOne}
            </button>
            <Link href="/calculator">
              <button className="button bg-aqua">
                {translations.buttonTwo}
              </button>
            </Link>
          </div>
        </section>
        <section className="flex-row items-center justify-end flex-1 hidden lg:flex">
          <div className="w-[450px] h-[450px] relative rounded-tr-[100px] rounded-bl-[100px] rounded-lg overflow-hidden">
            <Image
              src={FoodImg}
              fill="true"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
            />
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={MouseImg}
          width={20}
          height={20}
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Hero;
