import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  let locale = 'en';
  
  try {
    const cookieStore = cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE');

    if (localeCookie) {
      locale = localeCookie.value;
    }
  } catch (error) {
    console.error('Error accessing cookies:', error);
    // Fallback to default locale if cookies can't be accessed
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});