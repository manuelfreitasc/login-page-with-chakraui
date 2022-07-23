import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from "@chakra-ui/react"
import { Form } from "./components/form"

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
    },
  },
}

const theme = extendTheme({ colors })


export const App = () => (
  <ChakraProvider theme={theme}>
    <Form />
  </ChakraProvider>
)
