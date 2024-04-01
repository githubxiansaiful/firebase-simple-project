import { useContext } from "react";
import { AuthContext } from "../autho_provider/AuthoProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouteProfile = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    if(loader) {
        return <div className="container"><span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouteProfile;
PrivateRouteProfile.propTypes = {
    children: PropTypes.node
}