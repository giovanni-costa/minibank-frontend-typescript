import React from "react";
import { formatBalance, classColor } from "../util_functions";
import { TransferCardProps } from "../types/props";
import CopyToClipboard from "react-copy-to-clipboard";

export default function TransfersCard({ data, user }: TransferCardProps) {
    let peer: string;
    let peerName: string;
    let transfer: number;

    if (data.sender !== user) {
        peer = data.sender;
        peerName = data.senderName;
        transfer = parseFloat(data.value);
    } else {
        peer = data.receiver;
        peerName = data.receiverName;
        transfer = -parseFloat(data.value);
    }

    return (
        <div className="transfer-card">
            <div>{peerName}</div>

            <CopyToClipboard text={peer}>
                <div className="clipboard-id">
                    {peer}
                    <button>📋</button>
                </div>
            </CopyToClipboard>

            <div className={classColor(transfer.toString())}>
                {formatBalance.format(transfer)}
            </div>
        </div>
    );
}
