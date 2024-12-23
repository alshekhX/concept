'use client';

import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { setCookie, getCookie } from 'cookies-next';

const LanguageSwitcher = ({display='block'}) => {
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setCookie('NEXT_LOCALE', newLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    console.log(getCookie('NEXT_LOCALE'));
    router.refresh();
  };

  return (
    <div 
      onClick={switchLanguage}
      className={`px-4 rounded-md hover:opacity-90  cursor-pointer  md:flex bg-darkBlue text-white font-bold  py-2 font-medium ${display}`}
      variant="outline"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </div>
  );
};

export default LanguageSwitcher;