import React from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { Select } from "@chakra-ui/react";
import { BookNowButton } from "src/shared/ui/buttons";
import { useInView } from "react-intersection-observer";

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
    threshold: 0.8,
  });

  React.useEffect(() => {
    if (inView) {
      console.log(11);
    }
  }, [inView]);

  return (
    <Flex w={inView ? "fit-content" : "100%"} pos={"sticky"} top={"204px"} zIndex={"99999999999"} ref={ref}>
      <Flex
        w={inView ? "fit-content" : "100%"}
        bg={inView ? "#fff" : "red"}
        flexDir={"row"}
        alignItems={"center"}
        p={"20px 25px"}
        gap={2}
        pos={"relative"}
        // left={"50%"}
        bottom={"60px"}
        // transform={"translate(-50%, -60px)"}
        boxShadow={"0 0 6px rgba(0, 0, 0, 0.25)"}>
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
