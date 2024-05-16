import { useTranslation } from "react-i18next";
import { Box, Flex, Image } from "@chakra-ui/react";
import { PButton } from "src/shared/ui/buttons";
import { HomeDestinationSliderItemButton } from "./home-destination-slider-item-button";

interface SliderItemType {
  videoSource: string;
  bannerSource: string;
  countryName: string;
  iconSource: string;
}
export const HomeDestinationSliderItem = (props: SliderItemType) => {
  const { t } = useTranslation("home");
  const { videoSource, bannerSource, countryName, iconSource } = props;

  return (
    <Flex flexDir={"column"} align={"center"} gap={4}>
      <Box
        w={"50px"}
        h={"50px"}
        bg={"brand.blue"}
        borderRadius={"50%"}
        pos={"absolute"}
        top={"-25px"}
        transition={"all 350ms"}
        p={"10px"}
        zIndex={3}
        _hover={{ background: "#fff" }}>
        <Image src={iconSource} alt="icon" />
      </Box>
      <Box h={"100%"} bg={"#fff"} cursor={"pointer"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
        <Box w={"100%"} maxW={"275px"} h={"223px"} bg={"#000"}>
          <HomeDestinationSliderItemButton bannerSource={bannerSource} videoSource={videoSource} />
        </Box>
        <Flex flexDir={"column"}>
          <Box as="span" fontSize={"26px"} p={4}>
            {t(countryName)}
          </Box>
        </Flex>
      </Box>
      <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
    </Flex>
  );
};
