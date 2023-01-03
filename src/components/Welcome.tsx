import React from "react";
import { formatBalance } from "../util_functions";
import CopyToClipboard from "react-copy-to-clipboard";
import { WelcomeCardProps } from "../types/props";

export default function WelcomeCard({ userInfo }: WelcomeCardProps) {
    return (
        <div className="welcome-ui">
            <div>Welcome, {userInfo.sub}</div>

            <CopyToClipboard text={userInfo.id}>
                <div className="clipboard-id">
                    {userInfo.id}
                    <button>📋</button>
                </div>
            </CopyToClipboard>

            <div key={userInfo.amount}>
                {formatBalance.format(parseFloat(userInfo.amount))}
            </div>
        </div>
    );
}
