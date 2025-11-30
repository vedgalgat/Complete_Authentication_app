import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";


import { Routes, Route } from "react-router-dom"


const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

        </>
    )


}

export default Allroutes