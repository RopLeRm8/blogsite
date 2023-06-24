import AccountTab from "../ui/components/Dashboard/Account/AccountTab";
import OverViewTab from "../ui/components/Dashboard/OverviewTab";
import SettingsTab from "../ui/components/Dashboard/Settings/SettingsTab";
import { useRedirect } from "./useRedirect";

export default function useNavbarContent() {
  const redirect = useRedirect();
  const actions = {
    Login: () => redirect("/login"),
    Register: () => redirect("/register"),
  };
  const navbarData = [
    {
      name: "Overview",
      component: OverViewTab,
    },
    {
      name: "My blogs",
    },
    {
      name: "Account",
      component: AccountTab,
    },
    {
      name: "Settings",
      component: SettingsTab,
    },
    {
      name: "Login",
      action: actions.Login,
    },
    {
      name: "Register",
      action: actions.Register,
    },
  ];
  return { navbarData };
}
