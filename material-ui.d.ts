declare module "@mui/material/styles" {
  interface Theme {
    customPalette: {
      third: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customPalette?: {
      third?: string;
    };
  }
}
