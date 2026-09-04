import { useColorModeValue, Button} from "@chakra-ui/react";
import {AnimatePresence, motion,} from "framer-motion";
import Flag from "react-world-flags";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../state/language/languageSlice";
import commonTranslation from "../public/locale/common.json";


const LanguageToggleButton = () => {
    const currentLocale = useSelector((state) => state.language.locale)
    const dispatch = useDispatch();

    const isRus = currentLocale === 'ru';
    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Button aria-label={commonTranslation[currentLocale].toggleLanguage}
                    colorScheme={useColorModeValue('purple', 'orange')}
                    width={'40px'}
                    height={'40px'}
                    paddingX={'5px'}
                    onClick={() => {
                        if (isRus) {
                            changeLanguage('en');
                        } else {
                            changeLanguage('ru');
                        }
                    }}>
                <motion.div
                    animate={{ rotateY: isRus ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "inline-block" }}
                >
                    {
                        isRus ? <Flag code={'ru'} width={40} height={40}/> : <Flag code={'us'} width={40} height={40}/>
                    }
                </motion.div>
            </Button>
        </AnimatePresence>
    )
}

export default LanguageToggleButton
