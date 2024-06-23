
//eslint-disable-next-line
import { } from "@mui/material";

declare module "@mui/material" {
  

  interface Palette{
        tertiary: PaletteColor;
  }
  interface PaletteColor{
    [key: number]: string;
  }
}