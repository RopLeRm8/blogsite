import { useCallback, useEffect } from "react";

interface NavbarData {
  name: string;
  component?: React.ComponentType<Record<string, unknown>>;
  action?: () => void;
}
interface DashboardHandler {
  navbarData: NavbarData[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  confirmAction: () => void;
  lastTab: string;
  setLastTab: React.Dispatch<React.SetStateAction<string>>;
}
export default function useDashboardHandler({
  navbarData,
  activeTab,
  setActiveTab,
  confirmAction,
  lastTab,
  setLastTab,
}: DashboardHandler) {
  const activeTabData = navbarData.find((tab) => tab.name === activeTab);
  const ActiveComponent: React.ComponentType<Record<string, unknown>> | null =
    activeTabData?.component || null;

  const handleButtonChange = useCallback(
    (tab: string) => {
      const activeTabData = navbarData.find((t) => t.name === tab);
      const ActiveAction = activeTabData?.action || null;

      setActiveTab(tab);

      if (ActiveAction) {
        ActiveAction();
      }
    },
    [setActiveTab, navbarData]
  );
  const handleConfirm = () => {
    if (confirmAction) {
      confirmAction();
    }
  };
  useEffect(() => {
    if (ActiveComponent) {
      setLastTab(activeTab);
    }
  }, [ActiveComponent, activeTab, setLastTab]);

  const LastActiveComponent: React.ComponentType<
    Record<string, unknown>
  > | null = navbarData.find((tab) => tab.name === lastTab)?.component || null;
  return {
    ActiveComponent,
    LastActiveComponent,
    handleButtonChange,
    handleConfirm,
  };
}
