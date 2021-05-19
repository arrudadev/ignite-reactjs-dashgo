import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { SidebraDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebraDrawerProvider>
        <Component {...pageProps} />
      </SidebraDrawerProvider>      
    </ChakraProvider>
  );
}

export default MyApp
