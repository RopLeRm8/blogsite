import { useCallback, useEffect } from "react";

interface navbarData {
  name: string;
  component?: () => JSX.Element;
  action?: () => void;
}
interface DashboardHandler {
  navbarData: navbarData[];
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
  const ActiveComponent = activeTabData?.component || null;

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

  const LastActiveComponent = navbarData.find(
    (tab) => tab.name === lastTab
  )?.component;
  return {
    ActiveComponent,
    LastActiveComponent,
    handleButtonChange,
    handleConfirm,
  };
}
