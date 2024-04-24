import React from 'react';
import { Button } from '@chakra-ui/react';

interface BProps{
    props?: any;
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler;
}

export const PButton = ({props, children, className, onClick}: BProps) => {
  return (
    <Button {...props} className={className} onClick={onClick} bg={"#fff"} mx={8} border={"2px solid #000"} borderRadius={"25px"}>{children}</Button>
  )
}
