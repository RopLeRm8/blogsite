import { useState, useCallback, lazy } from "react";
const AccountTab = lazy(
  () => import("../ui/components/Dashboard/Account/AccountTab")
);
const OverViewTab = lazy(
  () => import("../ui/components/Dashboard/OverviewTab")
);
const SettingsTab = lazy(
  () => import("../ui/components/Dashboard/Settings/SettingsTab")
);
import { useRedirect } from "./useRedirect";

export default function useNavbarContent() {
  const redirect = useRedirect();
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>();
  const [confirmAction, setConfirmAction] = useState<() => void>(
    () => undefined
  );
  const setRedirectConfirmation = useCallback(
    (path: string, message: string) => {
      setOpenModal(true);
      setModalContent(message);
      setConfirmAction(() => () => {
        setOpenModal(false);
        redirect(path);
      });
    },
    [setOpenModal, setModalContent, setConfirmAction, redirect]
  );
  const actions = {
    Login: () =>
      setRedirectConfirmation(
        "/login",
        "Are you sure you want to enter the login page? This action will log you out."
      ),
    Register: () =>
      setRedirectConfirmation(
        "/register",
        "Are you sure you want to enter the register page? This action will log you out."
      ),
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
  return { navbarData, openModal, setOpenModal, modalContent, confirmAction };
}
