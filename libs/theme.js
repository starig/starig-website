import {extendTheme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#1d1d21')(props)
        }
    })

}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
    Links: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Rubik'"
}

const colors = {
    glassTeal: '#cc88bc'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme;