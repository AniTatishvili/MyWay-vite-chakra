import React from "react";
import { Heading } from "@chakra-ui/react";

interface TitleProps {
  props?: object;
  children: React.ReactNode;
}

export const PTitle = ({ props, children }: TitleProps) => {
  return (
    <Heading as="h2" size={{ base: "xl", md: "2xl", lg: "3xl" }} noOfLines={1} {...props} display={"flex"} justifyContent={"center"} py={{ base: 3, md: 6, lg: 8 }}>
      {children}
    </Heading>
  );
};
