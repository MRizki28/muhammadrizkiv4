export const getRequestConfig = async ({ locale }: { locale?: string }) => {
  const localeHere = locale ?? 'en'; // fallback ke default 'en'
  console.log('localeHere', localeHere);

  const messages = (await import(`../../messages/${localeHere}.json`)).default;

  return {
    locale: localeHere,
    messages,
  };
};

export default getRequestConfig;
