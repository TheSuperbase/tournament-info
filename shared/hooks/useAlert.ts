import { useContext } from "react";

import { AlertContext } from "@/shared/context/alertContext";

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(
      "useAlertContext는 AlertProvider 내에서만 사용할 수 있습니다."
    );
  }
  return context;
};
