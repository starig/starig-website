import NextLink from 'next/link';
import Image from 'next/image';
import {Box, LinkBox, LinkOverlay, Text} from "@chakra-ui/react";
import {Global} from '@emotion/react';
import WorkLink from "./work-link";
import commonTranslation from "../public/locale/common.json";
import {useSelector} from "react-redux";


export const WorkGridItem = ({children, id, title, thumbnail, demoUrl, productUrl}) => {
    const currentLocale = useSelector((state) => state.language.locale);

    return <Box w={'100%'} align={'center'}>
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor={"pointer"}>
                <Image src={thumbnail} alt={title} className={'grid-item-thumbnail'} placeholder={'blur'} blurDataURL/>
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
        <WorkLink href={demoUrl || productUrl} target="_blank">
            {
                demoUrl && commonTranslation[currentLocale].demo
            }
            {
                productUrl && commonTranslation[currentLocale].site
            }
        </WorkLink>
    </Box>
}

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}/>
)
