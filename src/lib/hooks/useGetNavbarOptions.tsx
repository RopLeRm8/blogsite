import IconsHandler from "./IconsHandler";

export default function useGetNavbarOptions() {
  const {
    lockIcon: LockIcon,
    signalIcon: SignalIcon,
    blogsIcon: BlogsIcon,
    accountIcon: AccountIcon,
    registerIcon: RegisterIcon,
    settingsIcon: SettingsIcon,
  } = IconsHandler();
  return [
    { label: "Overview", icon: <SignalIcon /> },
    { label: "My blogs", icon: <BlogsIcon /> },
    { label: "Account", icon: <AccountIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Login", icon: <LockIcon /> },
    { label: "Register", icon: <RegisterIcon /> },
  ];
}
