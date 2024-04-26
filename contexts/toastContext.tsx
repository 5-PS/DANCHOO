import { ReactNode, createContext, useContext } from 'react';

import Toast from '@/components/toast/toast';
import useToast from '@/hooks/useToast';

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext({
  isLoading: false,
  isShouldRender: false,
  isShown: false,
  message: '',
  showToast: (_msg: string) => {},
  startHidingToast: () => {},
});

export const useToastContext = () => useContext(ToastContext);

export function ToastProvider({ children }: ToastProviderProps) {
  const toastProps = useToast();

  return (
    <ToastContext.Provider value={toastProps}>
      {children}
      <Toast
        message={toastProps.message}
        isShouldRender={toastProps.isShouldRender}
        isShown={toastProps.isShown}
        startHidingToast={toastProps.startHidingToast}
      />
    </ToastContext.Provider>
  );
}
