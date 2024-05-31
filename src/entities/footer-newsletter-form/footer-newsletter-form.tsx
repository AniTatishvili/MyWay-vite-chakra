import { Flex, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FooterNewsletterFormButton } from "./ui";
export const FooterNewsletterForm = () => {
  return (
    <FormControl w={"fit-content"}>
      <Flex maxW={"400px"} w={"100%"} flexDir={"column"} gap={4}>
        <Flex w={"400px"} flexDir={"column"}>
          <FormLabel fontSize={"16px"} fontWeight={600}>
            Surname *
          </FormLabel>
          <Input type="text" borderColor={"#000!important"} _focusVisible={{ boxShadow: "0 0 0 1px #000!important" }} />
        </Flex>
        <Flex w={"400px"} flexDir={"column"}>
          <FormLabel fontSize={"16px"} fontWeight={600}>
            First name *
          </FormLabel>
          <Input type="text" borderColor={"#000!important"} _focusVisible={{ boxShadow: "0 0 0 1px #000!important" }} />
        </Flex>
        <Flex w={"400px"} flexDir={"column"}>
          <FormLabel fontSize={"16px"} fontWeight={600}>
            Email address *
          </FormLabel>
          <Input type="email" borderColor={"#000!important"} _focusVisible={{ boxShadow: "0 0 0 1px #000!important" }} />
        </Flex>
        <FooterNewsletterFormButton>SUBSCRIBE</FooterNewsletterFormButton>
      </Flex>
    </FormControl>
  );
};
