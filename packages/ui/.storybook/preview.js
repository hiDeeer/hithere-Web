/** @type { import('@storybook/react').Preview } */
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import {lightTheme,darkTheme,GlobalStyle } from "@hideeer/styled-theme";
import { ThemeProvider } from "styled-components";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        LIGHT: lightTheme,
        DARK: darkTheme,
      },
      defaultTheme: "LIGHT",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
