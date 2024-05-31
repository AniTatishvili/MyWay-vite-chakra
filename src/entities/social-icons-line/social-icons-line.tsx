import { Flex } from "@chakra-ui/react";
import { SocialIcon } from "src/shared/ui/social-icons/social-icon";
import { FaFacebookF, FaSquareInstagram, FaLinkedinIn, FaTiktok, FaPinterest } from "react-icons/fa6";

export const SocialIconsLine = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }} flexDir="row" justifyContent="space-between" w="fit-content" gap={2}>
      <a href="#">
        <SocialIcon>
          <FaSquareInstagram />
        </SocialIcon>
      </a>
      <a href="#">
        <SocialIcon>
          <FaFacebookF />
        </SocialIcon>
      </a>
      <a href="#">
        <SocialIcon>
          <FaLinkedinIn />
        </SocialIcon>
      </a>
      <a href="#">
        <SocialIcon>
          <FaTiktok />
        </SocialIcon>
      </a>
      <a href="#">
        <SocialIcon>
          <FaPinterest />
        </SocialIcon>
      </a>
    </Flex>
  );
};
