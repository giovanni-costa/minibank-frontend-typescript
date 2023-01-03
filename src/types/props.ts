import { JwtToken, TokenData } from "./project_types";

export interface ProtectedRouteProps {
    token: JwtToken;
}

export interface LoginUIProps {
    setToken: (arg0: JwtToken) => void;
}

export interface HomeUIProps {
    token: JwtToken;
}

export interface WelcomeCardProps {
    userInfo: TokenData;
}

export interface LastTransferProps {
    userInfo: TokenData;
    hashToken: string;
}

export interface MakeTransferProps {
    userInfo: TokenData;
    hashToken: string;
    onChangeBalance: (arg0: TokenData) => void;
}

export interface TransferCardProps {
    peer: string;
    transfer: number;
}
