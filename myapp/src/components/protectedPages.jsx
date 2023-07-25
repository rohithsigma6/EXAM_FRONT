import React, { useEffect, useState } from "react";
import { Currentuser } from "../apiCalls/users";
import { useNavigate } from "react-router-dom";
import './protectedPages.css'

import DefaultPage from "../pages/DefaultPage";

function ProtectedPages({ children }) {
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const validateToken = async () => {
        try {
            const response = await Currentuser()
            console.log(response)
            if (response.data.success) {
                console.log(response)
                setUser(response.data.details)
                navigate("/home")
            }
            else {
                alert(response.message)
                navigate("/login")
            }
        }
        catch (err) {
            navigate("/login")
            alert("error")
        }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            validateToken()
            navigate("/home")
        }
        else {
            alert("please login to continue")
            navigate("/login")
        }
    }, [])
    return (
        <div>
            <DefaultPage/>
           
            {user && (
              
              <div>{children}</div>
               
            )}

        </div>
    )
}
export default ProtectedPages