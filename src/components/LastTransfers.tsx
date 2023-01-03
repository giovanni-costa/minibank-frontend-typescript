import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../main";
import TransfersCard from "./TransferCard";
import { TransferObj } from "../types/project_types";
import { LastTransferProps } from "../types/props";

export default function LastTransfers({
    userInfo,
    hashToken,
}: LastTransferProps) {
    let records: JSX.Element[] = [];
    const [lastTransfers, setTransfers] = useState(records);

    useEffect(() => {
        fetchData();
    }, [userInfo]);

    async function fetchData() {
        try {
            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hashToken}`,
                },
            });

            const res = await api.get(`transfers/${userInfo.id}`);
            // console.log(res.data)

            res.data.forEach((element: TransferObj) => {
                const peer =
                    element.sender !== userInfo.id
                        ? `From: ${element.sender}`
                        : `To: ${element.receiver}`;

                const transfer =
                    element.receiver === userInfo.id
                        ? parseFloat(element.value)
                        : -parseFloat(element.value);

                records.push(
                    <li key={element.id}>
                        <TransfersCard peer={peer} transfer={transfer} />
                    </li>
                );
            });

            setTransfers(records);
            records = [];
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="last-transfers">
            <ul>{lastTransfers}</ul>
        </div>
    );
}
