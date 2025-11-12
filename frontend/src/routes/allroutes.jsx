import React from "react" ;
import Signup from "../pages/signup";
import Login from "../pages/login";

import { Routes, Route } from "react-router-dom"


const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </>
    )


}

export default Allroutes