import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({element,isAuthenticated}) => {
    return isAuthenticated ? element : <Navigate to="/Login" />;
}

export default AuthenticatedRoute;