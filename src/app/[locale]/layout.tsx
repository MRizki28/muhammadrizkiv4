import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "@/i18n/request"; // named import

const roboto = localFont({
  src: "../../assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf",
});

export const metadata: Metadata = {
  title: "Muhammad Rizki",
  description: "Muhammad Rizki's personal website",
  icons: {
    icon: "icon.png",
  },
};

export default (async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const localePromise = Promise.resolve(params);
  const { locale } = await localePromise;

  console.log("Locale:", locale);

  const requestConfig = await getRequestConfig({ locale });

  return (
    <html lang={requestConfig.locale} suppressHydrationWarning>
      <head />
      <body className={roboto.className}>
        <NextIntlClientProvider
          locale={requestConfig.locale}
          messages={requestConfig.messages}
        >
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}) as unknown as React.ComponentType<any>; 
