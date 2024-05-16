import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface HomeSliderButtonProps {
  icon: IconType;
  size: number;
  direct: string;
}

export const HomeSliderButton = (props: HomeSliderButtonProps) => {
  const { icon, size, direct } = props;

  return (
    <Box pos={"absolute"} color={"brand.blue"} p={"10px"} className={direct === "left" ? "homeSliderLeft" : "homeSliderRight"}>
      <Icon as={icon} boxSize={size} w={"100%"} />
    </Box>
  );
};
