import {IconButton, useColorModeValue} from "@chakra-ui/react";
import {DownloadIcon} from "@chakra-ui/icons";
import {AnimatePresence, motion,} from "framer-motion";


const DownloadCvButton = () => {
    const downloadCV = () => {
        fetch('CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV.pdf';
                alink.click();
            })
        })
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display: 'inline-block'}}
                        initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 20, opacity: 0}}
                        transition={{duration: 0.2}} whileTap={{y: 20}}>
                <IconButton aria-label={'Download CV'}
                            colorScheme={useColorModeValue('purple', 'orange')}
                            icon={<DownloadIcon/>}
                            onClick={downloadCV}></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default DownloadCvButton