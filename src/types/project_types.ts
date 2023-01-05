export type TokenData = {
    sub: string;
    id: string;
    amount: string;
    role: string;
    iat: number;
    exp: number;
};

export type JwtToken = {
    token: string;
    data: TokenData;
};

export type TransferObj = {
    id: string;
    sender: string;
    senderName: string;
    receiver: string;
    receiverName: string;
    value: string;
    date: string;
};
