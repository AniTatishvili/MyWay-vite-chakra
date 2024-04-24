import i18next from 'i18next';

declare module 'i18n' {
  const i18nInstance: i18next.i18n;
  export default i18nInstance;
}