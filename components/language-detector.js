import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../state/language/languageSlice';

const COUNTRY_ENDPOINT = 'https://ipapi.co/country/';

const LanguageDetector = () => {
    const currentLocale = useSelector((state) => state.language.locale);
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();

        const detectLanguage = async () => {
            try {
                const response = await fetch(COUNTRY_ENDPOINT, {
                    headers: {
                        Accept: 'text/plain',
                    },
                    signal: controller.signal,
                });

                if (!response.ok) {
                    return;
                }

                const countryCode = (await response.text()).trim().toUpperCase();

                if (countryCode === 'RU') {
                    dispatch(setLanguage('ru'));
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.warn('Could not detect the visitor country.', error);
                }
            }
        };

        detectLanguage();

        return () => controller.abort();
    }, [dispatch]);

    useEffect(() => {
        document.documentElement.lang = currentLocale;
    }, [currentLocale]);

    return null;
};

export default LanguageDetector;
