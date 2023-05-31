import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/FirebaseAuthContext";
import { useContext } from "react";


export const PrivateRoutes = () => {
const { currentUser } = useContext(AuthContext)
console.log('from private route ', currentUser )


    return (

        (true) ? <Outlet /> : <Navigate to={'/firebase-test'} />
        
    )

}