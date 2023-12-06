import Image from 'next/image';
import HealthyCouple from '../public/healthy-couple.jpg';

const About = ({ translations }) => {
  return (
    <section
      id="about"
      className="flex flex-row flex-wrap items-center justify-between py-[15vh]"
    >
      <div className="flex flex-col items-start justify-center flex-1 gap-6">
        <h1 className="text-5xl font-bold font-lobster">
          {translations.title}
        </h1>
        <p className="leading-7">{translations.paragraph}</p>
      </div>
      <div className="flex-row items-center justify-end flex-1 hidden lg:flex">
        <div className="relative w-[500px] h-[300px] rounded-md overflow-hidden">
          <Image
            placeholder="blur"
            src={HealthyCouple}
            fill="true"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
