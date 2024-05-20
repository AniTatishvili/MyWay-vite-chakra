import { Button } from "@chakra-ui/react";

interface BProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export const FooterNewsletterFormButton = ({ children, onClick }: BProps) => {
  return (
    <Button
      w={"fit-content"}
      bg={"#fff"}
      fontSize={"14px"}
      border={"1px solid #000"}
      borderRadius={"100px"}
      _hover={{ bg: "brand.blue", transition: "all 350ms" }}
      onClick={onClick}>
      {children}
    </Button>
  );
};
