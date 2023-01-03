import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../main";
import "../components/Login.css";
import { useNavigate } from "react-router-dom";
import { LoginUIProps } from "../types/props";

export default function LoginUI({ setToken }: LoginUIProps) {
    const [UserCPF, setCPF] = useState("");
    const [UserPwd, setPwd] = useState("");
    const navigate = useNavigate();

    async function getUser() {
        try {
            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: { "Content-Type": "application/json" },
            });

            const response = await api.get(
                `auth?cpf=${UserCPF}&pwd=${UserPwd}`
            );

            if (response.data) {
                setToken(response.data);
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login-ui">
            <h1>minibank</h1>

            <input
                type="text"
                placeholder="User CPF"
                maxLength={11}
                value={UserCPF}
                onChange={(e) => {
                    setCPF(e.target.value);
                }}
            ></input>

            <input
                type="password"
                placeholder="Password"
                value={UserPwd}
                onChange={(e) => {
                    setPwd(e.target.value);
                }}
            ></input>

            <button onClick={getUser}>Login</button>
        </div>
    );
}
