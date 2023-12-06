'use client';

import useLocale from '@/hooks/useLocale';
import { Link } from '../navigation';

const Switch = () => {
  const locale = useLocale();

  return (
    <Link
      href="/"
      locale={locale === 'mm' ? 'en' : 'mm'}
      className="flex h-8 bg-gray-600 rounded-md cursor-pointer w-14"
      onClick={() => setIsSelected(locale === 'mm')}
    >
      <span
        className={`flex items-center text-center text-sm justify-center w-10 h-8 rounded-md bg-yellow ${
          locale === 'mm' && 'ml-4'
        }`}
      >
        {locale}
      </span>
    </Link>
  );
};

export default Switch;
