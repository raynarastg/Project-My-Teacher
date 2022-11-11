import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import tema from '../src/themes/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
     <Cabecalho />
     <Component {...pageProps} />
      </ThemeProvider>)
}

export default MyApp
