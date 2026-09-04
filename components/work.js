import NextLink from 'next/link'
import {Heading, Box, Image, Link, Badge, AspectRatio} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {useSelector} from "react-redux";
import commonTranslation from "../public/locale/common.json";

export const Title = ({children}) => {
    const currentLocale = useSelector((state) => state.language.locale);

    return (
        <Box>
            <NextLink href={'/works'}>
                <Link>
                    {commonTranslation[currentLocale].works}
                </Link>
            </NextLink>
            <span>
                &nbsp;
                <ChevronRightIcon/>
                &nbsp;
            </span>
            <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={4} />
)

export const WorkVideo = ({ src, alt }) => (
    <AspectRatio maxW="560px" ratio={1}>
        <iframe
            title={alt}
            src={src}
            allowFullScreen
        />
    </AspectRatio>
)

export const Meta = ({ children }) => (
    <Badge colorScheme={'green'} mr={2}>
        {children}
    </Badge>
)
