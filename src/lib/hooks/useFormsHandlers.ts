import { useCallback } from "react";

interface FormsHandlersProps {
  setModalOpenPolicy?: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpenTerms?: React.Dispatch<React.SetStateAction<boolean>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function useFormsHandlers({
  setModalOpenPolicy = undefined,
  setModalOpenTerms = undefined,
  setVisible,
}: FormsHandlersProps) {
  const openModalPolicyHandler = useCallback(() => {
    if (setModalOpenPolicy) {
      setModalOpenPolicy(true);
    }
  }, [setModalOpenPolicy]);
  const openModalTermsHandler = useCallback(() => {
    if (setModalOpenTerms) {
      setModalOpenTerms(true);
    }
  }, [setModalOpenTerms]);
  const visibleHandler = useCallback(() => {
    setVisible((prev) => !prev);
  }, [setVisible]);
  return { openModalPolicyHandler, openModalTermsHandler, visibleHandler };
}
