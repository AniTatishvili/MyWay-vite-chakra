import React from 'react';
import { PageSectionContent } from '../../entities/layouts/PageSectionContent';
import { Flex, Text } from '@chakra-ui/react';
export const Footer = () => {
  return (
    <Flex bg="#414445">

        <PageSectionContent>
            <Flex w="100%" color="#fff" fontSize="15px" borderTop={"1px solid #fff"} gap={4}>
              <Flex>
                
              </Flex>
              <Flex
              flexWrap="wrap-reverse"
              alignItems="center"
              justifyContent={{ base: "center", sm: "space-between" }}
              w="100%"
              maxW="1200px"
              m="0 auto"
              p="5px 1rem">
              <Text fontStyle="oblique" fontSize=".875rem">
                  {/* {t("FOOTER.COPYRIGHT", { year: year })} */}
                  © 2024 JO&JOE. All rights reserved.
              </Text>
              {/* <SocialIconsLine /> */}
              </Flex>
          </Flex>
        </PageSectionContent>
    </Flex>
  )
}
