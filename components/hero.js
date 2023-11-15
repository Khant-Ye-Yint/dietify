import Image from 'next/image';
import Link from 'next/link';

import FoodImg from '../public/testPic.png';
import MouseImg from '../public/mouse.png';

const Hero = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-between h-full min-h-[80vh]">
        <section className="flex flex-col flex-1 space-y-7 md:space-y-10">
          <h1 className="text-6xl md:text-7xl text-start font-lobster">
            Identify your food nutrients and maintain your fitness
          </h1>
          <p className="text-lg font-montserrat">Dietify and know your food</p>
          <div className="flex flex-row justify-start space-x-5">
            <button className="button bg-yellow">What is Dietify</button>
            <Link href="/calculator">
              <button className="button bg-aqua">Get Started</button>
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
