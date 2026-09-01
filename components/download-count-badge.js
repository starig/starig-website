import {Badge} from "@chakra-ui/react";
import {DownloadIcon} from "@chakra-ui/icons";
import {useSelector} from "react-redux";
import commonTranslation from "../public/locale/common.json";

const DownloadCountBadge = ({count}) => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Badge
            display={'inline-flex'}
            alignItems={'center'}
            gap={1}
            colorScheme={'purple'}
            variant={'subtle'}
            borderRadius={'md'}
            px={2}
            py={1}
            fontSize={'xs'}
            textTransform={'none'}
        >
            <DownloadIcon boxSize={3}/>
            {count} {commonTranslation[currentLocale].downloads}
        </Badge>
    )
}

export default DownloadCountBadge;
