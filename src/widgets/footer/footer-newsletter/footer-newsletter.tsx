import { Flex, Image, Text } from "@chakra-ui/react";
import { FooterNewsletterForm } from "src/entities/footer-newsletter-form";
import newsletter_icon from "../../../app/assets/images/newsletter/newsletter-icons/carrier-pigeon.png";

export const FooterNewsletter = () => {
  return (
    <Flex align={"center"} justify={"center"} wrap={{ base: "wrap", md: "nowrap" }} m={"2rem 0 4rem"} gap={10}>
      <Flex flexDir={"column"} fontWeight={600} gap={4}>
        <Text fontSize={"18px"}>Our special offers and our best deals, nothing more!</Text>
        <FooterNewsletterForm />
      </Flex>
      <Flex maxW={"200px"} transform={"scaleX(-1)"} order={{ base: 1, md: 2 }}>
        <Image src={newsletter_icon} alt="newsletter_icon" />
      </Flex>
    </Flex>
  );
};
