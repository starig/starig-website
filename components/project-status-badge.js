import {Badge} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import commonTranslation from "../public/locale/common.json";

const ProjectStatusBadge = () => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Badge
            colorScheme={'red'}
            variant={'subtle'}
            borderRadius={'md'}
            px={2}
            py={1}
            fontSize={'sm'}
            textTransform={'none'}
        >
            {commonTranslation[currentLocale].projectClosed}
        </Badge>
    )
}

export default ProjectStatusBadge;
