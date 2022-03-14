import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextCloseData {}

//context
export const ContextClose = createContext<ContextCloseData>(
  {} as ContextCloseData
);

//provider
export const ProviderClose: React.FC<Props> = ({ children }: Props) => {
  const [close, setClose] = useState(false);
  const closeModal = () => {
    setClose(!close);
  };

  const [closeOpenModal, setCloseOpenModal] = useState(false);

  return (
    <ContextClose.Provider
      value={{
        setClose,
        close,
        closeModal,
      }}
    >
      {children}
    </ContextClose.Provider>
  );
};

//hook
export const context = () => useContext(ContextClose);
