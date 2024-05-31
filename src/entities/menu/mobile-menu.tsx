import React, { useRef } from "react";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { MenuList } from "../menu-list";
import { Logotype } from "src/shared/ui/logotype";
import { SButton } from '../../shared/ui/buttons/SButton';

export const MobileMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <BiMenu fontSize="2rem" />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="100%">
        <DrawerOverlay />
        <DrawerContent bg="rgba(0, 0, 0, 0.73)" color="#f2f2f2" style={{ backdropFilter: "blur(10px)" }} gap={4}>
          <Box pos="relative">
            <DrawerCloseButton w={"20px"} h={"20px"} bg={"none"} color={"#000"} top="50%" right="16px" transform="translateY(-50%)" />
            <DrawerHeader bg={"#fff"} display="flex" justifyContent={"space-between"} alignItems={"center"} fontSize="0.875rem" fontWeight={700} textTransform="uppercase" p={4}>
              <Logotype/>
              <SButton>Book Now</SButton>
            </DrawerHeader>
          </Box>

          <DrawerBody color="#fff">
            <MenuList flexDir="column" gap={5} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
