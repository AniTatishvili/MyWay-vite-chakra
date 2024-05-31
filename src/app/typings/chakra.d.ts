import { Theme, IconType } from '@chakra-ui/react';

declare module 'defaultTheme' {
  const theme: Theme;
  export default theme;
}

declare module '@chakra-ui/icons' {
  export const AddIcon: IconType;
  export const CloseIcon: IconType;
}