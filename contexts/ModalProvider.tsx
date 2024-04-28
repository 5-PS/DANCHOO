'use client';

import { ReactNode, createContext, useState } from 'react';

export const ModalStateContext = createContext<any>({} as any);
export const ModalSetterContext = createContext<any>({} as any);

interface ModalProviderProps {
  children: ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [state, setState] = useState({});

  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>{children}</ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}

export default ModalProvider;
