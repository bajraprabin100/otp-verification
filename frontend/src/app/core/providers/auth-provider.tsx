import { createContext, useContext, useMemo, PropsWithChildren, memo } from "react";

import { useLocalStorage } from "../hooks";
import {useMutation} from "@tanstack/react-query";
import toastFunctions from "@/app/shared/components/toast/toast";
import {ErrorResponse} from "@/app/core/services/type/request-response.type";

export interface AppSession extends Record<string, any | undefined> {
  token?: string;
  refreshToken?: string;
}

export type AuthContextType = {
  session?: AppSession | null;
  isAuthenticated: () => boolean;
  login: (session: AppSession) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as never);

type AuthProviderProps = {
  sessionStorageKey?: string;
  onLogout?: () => void;
};

// eslint-disable-next-line react/display-name
export const AuthProvider = memo(
  ({ children, sessionStorageKey = "default_app_session", onLogout }: PropsWithChildren<AuthProviderProps>) => {
    const { errorMsg} = toastFunctions()
    const [session, setSession] = useLocalStorage<AppSession>(sessionStorageKey);
   
    const value = useMemo(() => {
      return {
        session,
        isAuthenticated: () => !!session?.token,
        login: (session: AppSession) => {
          setSession(session);
        },
        logout: () => {
          const storageToken = localStorage.getItem("fcm-gecc-token")
          if(!storageToken){
          setSession(undefined);
            destroySessions();
            onLogout?.();
          }
        },
      };
    }, [session]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
);

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

function destroySessions(){
  localStorage.removeItem("profileModelOpened");
  localStorage.removeItem("fcm-gecc-token");
}
