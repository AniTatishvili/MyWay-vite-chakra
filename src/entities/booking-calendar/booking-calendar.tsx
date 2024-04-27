import React from 'react';
import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { Select } from '@chakra-ui/react';
import { BookNowButton } from 'src/shared/ui/buttons'; 

import "react-datepicker/dist/react-datepicker.css";

interface selectItemType {
  id: number;
  option: string;
}

const selectItems: selectItemType[] = [
  {
    id: 1,
    option: "Tbilisi, Georgia"
  },
  {
    id: 2,
    option: "Batumi, Georgia"
  },
  {
      id: 3,
      option: "Baku, Azerbaijan"
  },
  {
      id: 4,
      option: "Baku, Azerbaijan"
  }
];

export const BookingCalendar = () => {
  const { t } = useTranslation("common");
  const [startDate, setStartDate] = React.useState(new Date());
  
  return (
    <Flex w={"100%"} maxW={"1248px"} bg={"#fff"} flexDir={"row"} alignItems={"center"} borderRadius={"10px"} p={"20px 25px"} gap={2}>
      <Select placeholder='Select destination' bg={"#fff"} borderRadius={"10px"} boxShadow={"1px 0 6px 1px rgba(0, 0, 0, .16)"}>
        {selectItems.map((item)=>{
          return(
            <option value='option1' key={item.id}>{item.option}</option>
            )
          })
        }
      </Select>
      <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} />
      <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} />
      <Select placeholder='Select option' bg={"#fff"} borderRadius={"10px"} boxShadow={"1px 0 6px 1px rgba(0, 0, 0, .16)"}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <Flex><BookNowButton>{t("BUTTONS.BOOK_NOW")}</BookNowButton></Flex>
    </Flex>
  )
}
