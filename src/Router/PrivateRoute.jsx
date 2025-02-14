// Import necessary hooks and components from React and React Router
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; 
import { Navigate, useLocation } from "react-router-dom";    

// PrivateRoute component that wraps protected routes and handles authentication
const PrivateRoute = ({children}) => {

    // Get user and loading state from AuthContext using useContext hook
    const {user , loading} = useContext(AuthContext);

    // Get current location using useLocation hook to redirect back after login
    const location = useLocation();

    // Show loading spinner while authentication state is being checked
    if(loading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500"></div>
            </div>
        );
    }

    // If user is authenticated, render the protected route content (children)
    if(user){
        return children;
    }

    // If user is not authenticated, redirect to sign in page with return location
    return <Navigate to="/signIn" state={location?.pathname} ></Navigate>
};

// Export the PrivateRoute component to be used in router configuration
export default PrivateRoute;