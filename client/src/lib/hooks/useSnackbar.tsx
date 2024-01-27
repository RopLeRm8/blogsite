import { Alert } from "@mui/material";
import React from "react";

interface ISnackbar {
  error: string | null;
  data: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function useSnackbar({
  error,
  data,
  setError,
  setData,
}: ISnackbar) {
  const handleClose = () => {
    setError(null);
    setData(null);
  };
  const renderContent = () => {
    if (error) {
      return (
        <Alert
          severity="error"
          variant="outlined"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {error}
        </Alert>
      );
    }

    if (data) {
      return (
        <Alert
          severity="success"
          variant="outlined"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {data}
        </Alert>
      );
    }

    return undefined;
  };
  return renderContent;
}
