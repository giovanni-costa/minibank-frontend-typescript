import { Outlet, Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../types/props";

export default function ProtectedRoute({ token }: ProtectedRouteProps) {
    return token.token !== "" ? <Outlet /> : <Navigate to="/"></Navigate>;
}
