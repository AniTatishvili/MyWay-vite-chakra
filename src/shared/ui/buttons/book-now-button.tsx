import React from 'react';
import { Button } from '@chakra-ui/react';

interface BProps{
    props?: any;
    children?: any;
    onClick?: React.MouseEventHandler;
}

export const BookNowButton = ({props, children, onClick}: BProps) => {
  return (
    <Button {...props} onClick={onClick} bg={"#2DA2DC"} size="md" borderRadius={"100px"}>{children}</Button>
  )
}