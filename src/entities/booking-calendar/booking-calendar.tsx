import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Flex } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { Select } from "@chakra-ui/react";
import { BookNowButton } from "src/shared/ui/buttons";

import "react-datepicker/dist/react-datepicker.css";

interface selectItemType {
  id: number;
  option: string;
}

const selectItems: selectItemType[] = [
  {
    id: 1,
    option: "Tbilisi, Georgia",
  },
  {
    id: 2,
    option: "Batumi, Georgia",
  },
  {
    id: 3,
    option: "Baku, Azerbaijan",
  },
  {
    id: 4,
    option: "Baku, Azerbaijan",
  },
];

const offersSelect: selectItemType[] = [
  {
    id: 1,
    option: "Beauty & Relax",
  },
  {
    id: 2,
    option: "Co-work",
  },
  {
    id: 3,
    option: "Capsule sleep Pod",
  },
  {
    id: 4,
    option: "Hostel",
  },
  {
    id: 5,
    option: "Cube Room",
  },
  {
    id: 6,
    option: "Company Seat",
  },
  {
    id: 7,
    option: "Media Studio",
  },
  {
    id: 8,
    option: "Internet & telophone",
  },
];

export const BookingCalendar = () => {
  const { t } = useTranslation("common");
  const [startDate, setStartDate] = React.useState(new Date());

  const { ref, inView } = useInView({
    triggerOnce: false, // We want to keep tracking the visibility
    threshold: 0.1, // Adjust this value as needed
  });

  React.useEffect(() => {
    console.log("inView:", inView);
    if (!inView) {
      console.log("Div is out of view");
    } else {
      console.log("Div is in view");
    }
  }, [inView]);

  return (
    <Flex
      w={inView ? "fit-content" : "100%"}
      bg={"red"}
      pos={inView ? "absolute" : "static"}
      bottom={inView ? "30px" : "unset"}
      top={inView ? "unset" : "0"}
      left={"50%"}
      zIndex={"99999999999"}
      transform={"translate(-50%, -30px)"}
      borderRadius={"10px"}
      ref={ref}>
      <Flex w={"fit-content"} flexDir={"row"} alignItems={"center"} p={"20px 25px"} gap={2}>
        <Select placeholder="Select destination" bg={"#fff"} borderRadius={"0"} border={"0"} borderRight={"1px solid #E6E8E8"}>
          {selectItems.map((item) => {
            return (
              <option value="option1" key={item.id}>
                {item.option}
              </option>
            );
          })}
        </Select>
        <Flex borderRadius={"0"} border={"0"} borderRight={"1px solid #E6E8E8"}>
          <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
        </Flex>
        <Flex borderRadius={"0"} border={"0"} borderRight={"1px solid #E6E8E8"}>
          <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
        </Flex>
        <Select placeholder="Select option" bg={"#fff"} borderRadius={"0"} border={"0"} borderRight={"1px solid #E6E8E8"}>
          {offersSelect.map((item) => {
            return (
              <option value="option1" key={item.id}>
                {item.option}
              </option>
            );
          })}
        </Select>
        <Flex>
          <BookNowButton>{t("BUTTONS.BOOK_NOW")}</BookNowButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
