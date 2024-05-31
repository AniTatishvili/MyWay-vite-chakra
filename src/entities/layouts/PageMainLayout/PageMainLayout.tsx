import React from 'react';
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Footer } from '../../../widgets/footer'; 
import { Header } from '../../../widgets/header'; 

export const PageMainLayout = () => {
  return (
    <Flex flexDir="column" w="100%" maxW="100vw" minH="100vh">
      <Header />
      <Box m="0 auto" flex="1 0 auto" w="100%" maxW={"100%"}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}
