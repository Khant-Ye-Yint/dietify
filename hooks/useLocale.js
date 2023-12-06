import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useLocale = () => {
  const [locale, setLocale] = useState('en');
  const pathname = usePathname();

  useEffect(() => {
    const pathNameArray = pathname.split('/');
    setLocale(pathNameArray[1]);
  }, []);

  return locale;
};

export default useLocale;
