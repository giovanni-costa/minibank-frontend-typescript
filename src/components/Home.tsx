import React, { useState } from "react";
import WelcomeCard from "./Welcome";
import LastTransfers from "./LastTransfers";
import TransferUI from "./MakeTransfer";
import "./Home.css";

export default function HomeUI(props: any) {
    const hashToken = props.token.token;
    const [userInfo, setUserInfo] = useState(props.token.data);

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
