import React from "react";
import { Button } from "@chakra-ui/react";

interface IProps {
  children?: React.ReactNode;
}

export const SocialIcon = ({ children }: IProps) => {
  return (
    <Button w={"45px"} h={"45px"} bg={"#fff"} color={"brand.blue"} fontSize={"1.5rem"} borderRadius={"50%"} p={"0"} _hover={{ color: "brand.black" }}>
      {children}
    </Button>
  );
};
