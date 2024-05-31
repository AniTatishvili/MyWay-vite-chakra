import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface HomeDestinationSliderButtonProps {
  icon: IconType;
  size: number;
  direct: string;
}

export const HomeDestinationSliderButton = (props: HomeDestinationSliderButtonProps) => {
  const { icon, size, direct } = props;

  return (
    <Box pos={"absolute"} color={"#000"} p={"10px"} className={direct === "left" ? "homeSliderLeft" : "homeSliderRight"}>
      <Icon as={icon} boxSize={size} w={"100%"} />
    </Box>
  );
};
