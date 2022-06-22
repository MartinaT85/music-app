import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'reset-css'

const theme = extendTheme({
  colors: {
    gray: {
      100: '#f5f5f5',
      200: '#eee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
})

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
