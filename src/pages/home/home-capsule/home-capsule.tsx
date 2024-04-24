import React from 'react';
import { useTranslation } from "react-i18next";
import { PageSectionContent } from 'src/entities/layouts/PageSectionContent';
import {Flex, Box, Image } from "@chakra-ui/react"
import { PTitle } from 'src/shared/ui/headings';
import { PButton } from 'src/shared/ui/buttons';

import capsule_hotel_1 from "../../../app/assets/images/home/home-capsule-hotel/1.jpg";
import capsule_hotel_2 from "../../../app/assets/images/home/home-capsule-hotel/10.jpg";
import capsule_hotel_3 from "../../../app/assets/images/home/home-capsule-hotel/11.jpg";


interface SlideSourceType {
  src: string;
}

interface SliderItemType {
  id: number;
  type: string;
  src: string;
  country: string;
  desc_text: string;
}

const silderItemsArr: SliderItemType[] = [
  {
    id: 1,
    type: "image",
    src: capsule_hotel_1,
    country: "NEXT_DESTINATION.TITLES.HUNGARY",
    desc_text: "NEXT_DESTINATION.DESC.1"
  },
  {
    id: 2,
    type: "image",
    src: capsule_hotel_2,
    country: "NEXT_DESTINATION.TITLES.AZERBAIJAN",
    desc_text: "NEXT_DESTINATION.DESC.2"
  },
  {
      id: 3,
      type: "image",
      src: capsule_hotel_3,
      country: "NEXT_DESTINATION.TITLES.GEORGIA",
      desc_text: "NEXT_DESTINATION.DESC.3"
  },
];

export const HomeCapsule = () => {
  const { t } = useTranslation("home");

  return (
    <>
    dddd
    </>
  )
}
