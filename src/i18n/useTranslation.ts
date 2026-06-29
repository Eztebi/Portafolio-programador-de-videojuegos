import es from './es.json';
import en from './en.json';

const translations = { es, en};

export function useTranslations(lang: 'es' | "en"){
    return (key: keyof typeof es) => translations[lang][key];
}