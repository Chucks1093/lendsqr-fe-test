import { createContext } from "react";
import UserData from "../types/UserData";

export interface StatusContextValue {
    updateUserStatus: () => void;
    showFirstLenders: () => void;
    setLenders: (lenders: {
        shownData: UserData[];
        data: UserData[];
    }) => void;
}
  

const StatusContext = createContext<StatusContextValue | undefined>(undefined);


export default StatusContext;