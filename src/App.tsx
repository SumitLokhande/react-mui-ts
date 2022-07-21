import React, { Suspense } from 'react';
import './App.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Routes from './routes';
import { CustomThemeProvider } from './providers/ThemeProvider';

const translateEn = { welcome: 'Welcome' };
const translateFr = { welcome: 'Bienvenue' };
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: translateEn,
      },
      fr: {
        translation: translateFr,
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  return (
    <CustomThemeProvider>
    <Suspense fallback="Loading...">
      <Routes />
    </Suspense>
    </CustomThemeProvider>
  );
}

export default App;
