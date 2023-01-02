import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeUI from "./components/Home";
import LoginUI from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
    const emptyJWT = {
        token: "",
        data: {
            sub: "",
            id: "",
            amount: "",
            role: "",
            iat: 0,
            exp: 0,
        },
    };

    const [jwtToken, setJwtToken] = useState(emptyJWT);

    return (
        <Routes>
            <Route element={<ProtectedRoute token={jwtToken} />}>
                <Route path="/home" element={<HomeUI token={jwtToken} />} />
            </Route>
            <Route path="/" element={<LoginUI setToken={setJwtToken} />} />
        </Routes>
    );
}

export default App;
