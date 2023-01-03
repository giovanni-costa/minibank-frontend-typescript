import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../main";
import { MakeTransferProps } from "../types/props";

export default function TransferUI({
    userInfo,
    hashToken,
    onChangeBalance,
}: MakeTransferProps) {
    const [receiverID, setID] = useState("");
    const [Amount, setAmount] = useState("0");
    const [Password, setPassword] = useState("");

    async function transferFunds() {
        if (!receiverID || !Amount || receiverID === "" || Amount === "") {
            alert("Please Fill All Fields");
            return;
        }

        if (parseFloat(Amount) <= 0) {
            alert("Cannot Transfer Negative Values");
            return;
        }

        // existance of receiver ID is up to backend
        try {
            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hashToken}`,
                },
            });

            const myJSON = {
                sender: userInfo?.id,
                receiver: receiverID,
                value: Amount,
            };

            const response = await api.post(
                `transfers?password=${Password}`,
                myJSON
            );

            console.log(response.data);

            setID("");
            setAmount("0");
            setPassword("");

            const userInfoObj = {
                ...userInfo,
                ...{
                    amount: (
                        parseFloat(userInfo.amount) - parseFloat(Amount)
                    ).toString(),
                },
            };

            onChangeBalance(userInfoObj);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="transfer">
            <input
                type="text"
                placeholder="Receiver ID"
                value={receiverID}
                onChange={(e) => {
                    setID(e.target.value);
                }}
            ></input>

            <input
                type="text"
                placeholder="Amount"
                value={Amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
            ></input>

            <input
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>

            <button onClick={transferFunds}>Make Transfer</button>
        </div>
    );
}
