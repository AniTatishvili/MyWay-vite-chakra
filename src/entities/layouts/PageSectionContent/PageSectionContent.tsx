import React from "react";
import { Box } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}
export const PageSectionContent = (props: IProps) => {
  return (
    <Box w="100%" flex="0 0 auto" {...props}>
      <Box m="0 auto" p={{ base: "0.8rem 1rem", md: "1rem" }} maxW="1400px" overflow={"hidden"}>
        {props.children}
      </Box>
    </Box>
  );
};
