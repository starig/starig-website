import NextLink from 'next/link';
import Image from 'next/image';
import {Box, LinkBox, LinkOverlay, Text} from "@chakra-ui/react";
import {Global} from '@emotion/react';
import WorkLink from "./work-link";

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w={'100%'} align={'center'}>
        <LinkBox cursor={'pointer'}>
            <Image src={thumbnail} alt={title} className={'grid-item-thumbnail'} placeholder={'blur'}
                   loading={'lazy'}/>
            <LinkOverlay href={href} target={'_blank'}>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({children, id, title, thumbnail, demoUrl, productUrl}) => (
    <Box w={'100%'} align={'center'}>
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
                demoUrl && 'Демо'
            }
            {
                productUrl && 'Сайт'
            }
        </WorkLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}/>
)
