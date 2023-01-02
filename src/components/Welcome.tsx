import React from "react";
import { formatBalance } from "../util_functions";
import { TokenData } from "../types/project_types";
import CopyToClipboard from "react-copy-to-clipboard";

export default function WelcomeCard(props: { userInfo: TokenData }) {
    return (
        <div className="welcome-ui">
            <div>Welcome, {props.userInfo.sub}</div>

            <CopyToClipboard text={props.userInfo.id}>
                <div className="clipboard-id">
                    {props.userInfo.id}
                    <button>📋</button>
                </div>
            </CopyToClipboard>

            <div key={props.userInfo.amount}>
                {formatBalance.format(parseFloat(props.userInfo.amount))}
            </div>
        </div>
    );
}
