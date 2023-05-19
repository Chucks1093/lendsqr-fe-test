import { createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
    const [userStatus, setUserStatus] = useState(false);

    return(
        <StatusContext.Provider value={{userStatus, setUserStatus}}>
            {children}
        </StatusContext.Provider>
    )
}

// export default StatusContext;