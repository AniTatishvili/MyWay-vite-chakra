import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { Flex, Box, Image } from "@chakra-ui/react";
import { PTitle } from "src/shared/ui/headings";
import { PButton } from "src/shared/ui/buttons";
import { RPlayer } from "src/shared/ui/video-players";

import beauty_relax from "../../../app/assets/images/home/home-products/beauty&relax.jpg";
import capsule_sleep_pod from "../../../app/assets/images/home/home-products/capsule-sleep-pod.jpg";
import company_seat from "../../../app/assets/images/home/home-products/company-seat.jpg";
import co_work from "../../../app/assets/images/home/home-products/co-work.jpg";
import cube_room from "../../../app/assets/images/home/home-products/cube-room.jpg";
import hostel from "../../../app/assets/images/home/home-products/hostel.jpg";
import media_studio from "../../../app/assets/images/home/home-products/media-studio.jpg";
import internet_telephone from "../../../app/assets/images/home/home-products/internet&telephone.jpg";

import beauty_relax_video from "../../../app/assets/videos/home/home-products/beauty&relax.mp4";
import capsule_sleep_pod_video from "../../../app/assets/videos/home/home-products/capsule-sleep-pod.mp4";
import company_seat_video from "../../../app/assets/videos/home/home-products/co-work.mp4";
import co_work_video from "../../../app/assets/videos/home/home-products/company-seat.mp4";
import cube_room_video from "../../../app/assets/videos/home/home-products/cube-room.mp4";
import hostel_video from "../../../app/assets/videos/home/home-products/hostel.mp4";
import media_studio_video from "../../../app/assets/videos/home/home-products/internet&telephone.mp4";
import internet_telephone_video from "../../../app/assets/videos/home/home-products/media-studio.mp4";

import capsule_sleep_pod_icon from "../../../app/assets/images/home/home-products/icons/capsule-sleep-pod.svg";
import co_work_icon from "../../../app/assets/images/home/home-products/icons/co-work.svg";
import co_work2_icon from "../../../app/assets/images/home/home-products/icons/co-work-2.svg";
import company_seat_icon from "../../../app/assets/images/home/home-products/icons/company-seat.svg";
import cube_room_icon from "../../../app/assets/images/home/home-products/icons/cube-room.svg";
import hostel_icon from "../../../app/assets/images/home/home-products/icons/hostel.svg";
import media_studio_icon from "../../../app/assets/images/home/home-products/icons/media-studio.svg";
import internet_telephone_icon from "../../../app/assets/images/home/home-products/icons/internet-telephone.svg";
import relax_woman_icon from "../../../app/assets/images/home/home-products/icons/relax-woman.svg";
// import relax_man_icon from "../../../app/assets/images/home/home-products/icons/relax-man.svg";

interface SliderItemType {
  id: number;
  bannerSource?: string;
  videoSource: string;
  product_text: string;
  iconSource?: string;
}

const capsuleItemsArr: SliderItemType[] = [
  {
    id: 1,
    bannerSource: beauty_relax,
    videoSource: beauty_relax_video,
    iconSource: relax_woman_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.1",
  },
  {
    id: 2,
    bannerSource: co_work,
    videoSource: co_work_video,
    iconSource: co_work_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.2",
  },
  {
    id: 3,
    bannerSource: capsule_sleep_pod,
    videoSource: capsule_sleep_pod_video,
    iconSource: capsule_sleep_pod_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.3",
  },
  {
    id: 4,
    bannerSource: hostel,
    videoSource: hostel_video,
    iconSource: hostel_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.4",
  },
  {
    id: 5,
    bannerSource: cube_room,
    videoSource: cube_room_video,
    iconSource: cube_room_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.5",
  },
  {
    id: 6,
    bannerSource: company_seat,
    videoSource: company_seat_video,
    iconSource: company_seat_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.6",
  },
  {
    id: 7,
    bannerSource: media_studio,
    videoSource: media_studio_video,
    iconSource: media_studio_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.7",
  },
  {
    id: 8,
    bannerSource: internet_telephone,
    videoSource: internet_telephone_video,
    iconSource: internet_telephone_icon,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.8",
  },
];

export const HomeProducts = () => {
  const { t } = useTranslation("home");

  return (
    <PageSectionContent>
      <PTitle>{t("TITLES.SLEEP_AT_MYWAY")}</PTitle>
      <Box as="span" fontSize={{ base: "14px", md: "18px" }}>
        {t("NEXT_DESTINATION.DESC")}
      </Box>
      <Flex flexDir={"row"} justify={"start"} flexWrap={"wrap"} m={"2rem 0 4rem"} gap={10}>
        {capsuleItemsArr.map((item) => {
          return (
            <Flex key={item.id} flexDir={"column"} alignItems={"center"} gap={6}>
              <Flex flexDir={"column"}>
                <Box w={"442px"} h={"320px"} bg={"#fff"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
                  <RPlayer bannerSource={item.bannerSource} videoSource={item.videoSource} />
                </Box>
                <Flex justify={"space-between"} alignItems={"center"}>
                  <Box as="span" fontSize={"26px"} p={4}>
                    {t(item.product_text)}
                  </Box>
                  <Flex p={"16px"} gap={2}>
                    <Image src={item.iconSource} w={"50px"} />
                  </Flex>
                </Flex>
              </Flex>
              <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
            </Flex>
          );
        })}
      </Flex>
    </PageSectionContent>
  );
};
