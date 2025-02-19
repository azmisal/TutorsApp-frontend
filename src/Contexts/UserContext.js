import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        return localStorage.getItem("userId") || null;
    });

    useEffect(() => {
        if (userId) {
            localStorage.setItem("userId", userId);
        } else {
            localStorage.removeItem("userId");
        }
    }, [userId]);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook to Use Context
export const useUser = () => {
    return useContext(UserContext);
};
