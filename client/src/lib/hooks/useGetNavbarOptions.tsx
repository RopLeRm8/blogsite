import IconsHandler from "./IconsHandler";

export default function useGetNavbarOptions() {
  const {
    signalIcon: SignalIcon,
    blogsIcon: BlogsIcon,
    accountIcon: AccountIcon,
    settingsIcon: SettingsIcon,
  } = IconsHandler();
  return [
    { label: "Overview", icon: <SignalIcon /> },
    { label: "My blogs", icon: <BlogsIcon /> },
    { label: "Account", icon: <AccountIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
  ];
}
