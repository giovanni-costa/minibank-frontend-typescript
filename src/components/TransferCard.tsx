import React from "react";
import { formatBalance, classColor } from "../util_functions";
import { TransferCardProps } from "../types/props";

export default function TransfersCard({ peer, transfer }: TransferCardProps) {
    return (
        <div className="transfer-card">
            <div>{peer}</div>

            <div className={classColor(transfer.toString())}>
                {formatBalance.format(transfer)}
            </div>
        </div>
    );
}
