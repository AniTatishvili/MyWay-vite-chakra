import React from 'react'
import { Image } from "@chakra-ui/react";

import logo from '../../../app/assets/images/logo.svg';

export const Logotype = () => {
  return (
    <a href="/" className="header-logo">
        <Image
          src={logo}
          w={{base:"70px", md:"100px"}}
          objectFit="contain"
          alt="Logotype"
        />
    </a>
  );
};

