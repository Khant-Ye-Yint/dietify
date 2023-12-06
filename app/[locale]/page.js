import Hero from '@/components/hero';
import About from '@/components/about';
import Info from '@/components/info';

import { useTranslations } from 'next-intl';

const Home = () => {
  const heroTranslation = useTranslations('Hero');
  const aboutTranslation = useTranslations('About');
  const infoTranslation = useTranslations('Info');

  const heroProps = {
    title: heroTranslation('title'),
    paragraph: heroTranslation('paragraph'),
    buttonOne: heroTranslation('buttonOne'),
    buttonTwo: heroTranslation('buttonTwo'),
  };

  const aboutProps = {
    title: aboutTranslation('title'),
    paragraph: aboutTranslation('paragraph'),
  };

  const infoProps = {
    foodItems: infoTranslation('foodItems'),
    foodParagraph: infoTranslation('foodParagraph'),
    naturalLanguage: infoTranslation('naturalLanguage'),
    naturalLanguageParagraph: infoTranslation('naturalLanguageParagraph'),
  };

  return (
    <div>
      <Hero translations={heroProps} />
      <About translations={aboutProps} />
      <Info infoProps={infoProps} />
    </div>
  );
};

export default Home;
