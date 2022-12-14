import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Header from "./layout/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header></Header>
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Header></Header>
      </Grid>
    </Box> */}
  </ChakraProvider>
);
