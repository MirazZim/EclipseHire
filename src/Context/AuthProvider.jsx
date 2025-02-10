import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //We used this to know someone is still logged in or not
    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Update state with the current user
            setUser(currentUser);
            
            // Log the captured authentication state
            console.log('state Captured', currentUser);
            
            // Set loading to false once user state is captured
            setLoading(false);
        });
    
        // Cleanup function to unsubscribe from auth state changes when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
    

    const authInfo = {
        user,
        loading,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;