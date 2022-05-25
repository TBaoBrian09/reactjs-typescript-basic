import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode;
}

interface progressContextDefault {
  lastTime: string;
  status: string;
}

const progressDefault = {
  lastTime: "30/5/2022",
  status: "In progress",
};

export const ProgressContext =
  createContext<progressContextDefault>(progressDefault);
 
const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
