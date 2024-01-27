
import { useEffect } from "react";
import WebFont from "webfontloader";

export function useLoadFonts() {
  const loadFonts = () => {
    WebFont.load({
      google: {
        families: ["Montserrat:400,500,600,700,800"],
      },
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);
}
