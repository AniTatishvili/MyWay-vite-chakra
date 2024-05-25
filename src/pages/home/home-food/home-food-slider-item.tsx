import { Box, Flex } from "@chakra-ui/react";
import { RPlayer } from "src/shared/ui/video-players";

interface SliderItemType {
  videoSource: string;
  bannerSource: string;
}
export const HomeFoodSliderItem = (props: SliderItemType) => {
  const { videoSource, bannerSource } = props;
  return (
    <Flex flexDir={"column"} align={"center"} gap={4}>
      <Box w={"100%"} bg={"#fff"} cursor={"pointer"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
        <Box w={"100%"} maxW={"100%"} h={"500px"} bg={"#000"}>
          <RPlayer bannerSource={bannerSource} videoSource={videoSource} />
        </Box>
      </Box>
    </Flex>
  );
};
