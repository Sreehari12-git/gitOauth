import { useEffect, useState } from "react";
import { data, Navigate, replace } from "react-router-dom";

const userUrl = import.meta.env.VITE_USER_URL;

function ProtectedRoute({children}) {
    const [loading, setLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch(userUrl, {
            credentials: "include",
        })
        .then((res) => res.json())
        .then((data) => {
            setIsLoggedIn(data.loggedIn);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return null; 
    }
    
    if(!isLoggedIn) {
        return <Navigate to = "/" replace/>;
    }

    return children;

}

export default ProtectedRoute