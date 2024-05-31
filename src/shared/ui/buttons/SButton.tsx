import React from "react";
import { Button } from "@chakra-ui/react";

interface BProps {
  props?: any;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const SButton = ({ props, children, className, onClick }: BProps) => {
  return (
    <Button {...props} className={className} onClick={onClick} bg={"none"} color={"brand.gold"} mx={8} borderRadius={4}>
      {children}
    </Button>
  );
};
