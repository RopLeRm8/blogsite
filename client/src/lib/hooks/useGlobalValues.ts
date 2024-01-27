import { MainContext } from "src/providers/RouteProvider";
import { useContext } from "react";

export function useGetGlobalValues() {
  const MainContextVal = useContext(MainContext);
  const firstColor = MainContextVal.colors[0];
  const secondColor = MainContextVal.colors[1];
  const font = MainContextVal.fonts[0];
  return { firstColor, secondColor, font };
}
