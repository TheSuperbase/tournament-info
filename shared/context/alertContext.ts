import type { ComponentProps } from "react";
import { createContext } from "react";

import Alert from "@/shared/ui/alert";

type AlertContextType = {
  showAlert: (props: ComponentProps<typeof Alert>) => void;
  hideAlert: () => void;
};

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);
