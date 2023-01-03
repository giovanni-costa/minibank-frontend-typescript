import React, { useState } from "react";
import WelcomeCard from "./Welcome";
import LastTransfers from "./LastTransfers";
import TransferUI from "./MakeTransfer";
import "./Home.css";
import { HomeUIProps } from "../types/props";

export default function HomeUI({ token }: HomeUIProps) {
    const hashToken = token.token;
    const [userInfo, setUserInfo] = useState(token.data);

    return (
        <div className="home-ui">
            <WelcomeCard userInfo={userInfo} />

            <LastTransfers userInfo={userInfo} hashToken={hashToken} />

            <TransferUI
                userInfo={userInfo}
                hashToken={hashToken}
                onChangeBalance={setUserInfo}
            />
        </div>
    );
}
