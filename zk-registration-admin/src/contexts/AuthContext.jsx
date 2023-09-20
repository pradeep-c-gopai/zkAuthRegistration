import {createContext,useState} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ( { children } ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userName, setUserName] = useState("");
    
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated ,  userName , setUserName}}>
            {children}
        </AuthContext.Provider>
    )
};