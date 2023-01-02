import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute(props: any) {
    return props.token ? <Outlet /> : <Navigate to="/"></Navigate>;
}
