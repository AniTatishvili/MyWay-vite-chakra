import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

interface Colors {
  brand: {
    black: string;
    white: string;
    dark: string;
    darkA: string;
    darkB: string;
    darkC: string;
    darkD: string;
    light: string;
    lightA: string;
    lightB: string;
    lightC: string;
    grey: string;
    greyA: string;
    greyB: string;
    gold: string;
    green: string;
    red: string;
  };
}

interface CustomStyles {
  global: (props: StyleFunctionProps) => Record<string, any>;
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles: CustomStyles = {
  global: (props) => ({
    body: {
      bg: mode("brand.white", "brand.darkA")(props),
    },
    p: {},
    a: {},
    button: {},
    svg: {},
    select: {},
    footer: {},
  }),
};

const fonts = {
  heading: `'RalewayVariable', sans-serif`,
  body: `'NunitoVariable', sans-serif`,
};

const colors: Colors = {
  brand: {
    black: "#000000",
    white: "#ffffff",
    dark: "#242424",
    darkA: "#121212",
    darkB: "#323232",
    darkC: "#3d3d3d",
    darkD: "#2e2e2e",
    light: "#f2f2f2",
    lightA: "#fdfdfd",
    lightB: "#f9f9f9",
    lightC: "#f0f0f0",
    grey: "#eaeaea",
    greyA: "#d9d9d9",
    greyB: "#9d9d9d",
    gold: "#dd9933",
    green: "#39884f",
    red: "#b92c2c",
  },
};

export const defaultTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
});
