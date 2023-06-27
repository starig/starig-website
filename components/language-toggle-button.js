import { useColorModeValue, Button} from "@chakra-ui/react";
import {AnimatePresence, motion,} from "framer-motion";
import Flag from "react-world-flags";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../state/language/languageSlice";


const LanguageToggleButton = () => {
    const languageState = useSelector((state) => state.language)
    const dispatch = useDispatch();

    const [isRus, setIsRus] = useState(languageState.locale === 'ru');

    const toggleLanguage = () => {
        setIsRus(!isRus);
    }
    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Button aria-label={'Toggle language'}
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
                        toggleLanguage();
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
