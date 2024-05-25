import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface BProps extends ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const PButton = ({ children, className, onClick, ...props }: BProps) => {
  return (
    <Button {...props} className={className} onClick={onClick} bg={"none"} border={"2px solid #000"} borderRadius={"25px"} _hover={{ bg: "brand.blue", transition: "all 350ms" }}>
      {children}
    </Button>
  );
};
