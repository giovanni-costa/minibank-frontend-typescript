import { Outlet, Navigate } from "react-router-dom";
import { JwtToken } from "../types/project_types";

export default function ProtectedRoute(props: { token: JwtToken }) {
    return props.token.token !== "" ? <Outlet /> : <Navigate to="/"></Navigate>;
}
