import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));

            // Check for token expiration
            if (user.token) {
                const tokenExpiry = user.expiry; // Assuming expiry time is stored
                const now = new Date().getTime();
                if (now >= tokenExpiry) {
                    handleLogout();
                }
            }
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // Logout Function
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook to Use Context
export const useUser = () => {
    return useContext(UserContext);
};
