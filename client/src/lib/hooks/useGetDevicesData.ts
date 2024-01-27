import pc from "assets/overview/pc.png";
import tablet from "assets/overview/tablet.png";
import phone from "assets/overview/phone.png";
import { useTheme } from "@mui/material";

export default function useGetDevicesData() {
  const theme = useTheme();
  const data = [
    {
      name: "Desktop",
      value: 25,
      color: theme.CustomColors.devicesColors.Desktop,
      icon: pc,
    },
    {
      name: "Tablet",
      value: 10,
      color: theme.CustomColors.devicesColors.Tablet,
      icon: tablet,
    },
    {
      name: "Phone",
      value: 65,
      color: theme.CustomColors.devicesColors.Phone,
      icon: phone,
    },
  ];
  return data;
}
