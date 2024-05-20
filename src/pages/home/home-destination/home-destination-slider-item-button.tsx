import ReactPlayer from "react-player";
import { Button } from "@chakra-ui/react";
import { FiPlayCircle } from "react-icons/fi";

interface SliderItemType {
  bannerSource: string;
  videoSource: string;
}
// https://vimeo.com/243556536
export const HomeDestinationSliderItemButton = (props: SliderItemType) => {
  const { bannerSource, videoSource } = props;
  return (
    <ReactPlayer
      url={videoSource}
      width="100%"
      height="100%"
      playing
      controls
      light={bannerSource}
      playIcon={
        <Button bg={"none"} color={"#fff"} fontSize={"4rem"} _hover={{ background: "none", color: "brand.blue" }}>
          <FiPlayCircle />
        </Button>
      }
    />
  );
};
