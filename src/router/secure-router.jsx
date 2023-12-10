import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const SecureRoute = ({ children }) => {

    if (!Cookies.get('user-token')) {
        return <Navigate to="/" replace={true} />
    } else {
        return <>{children}</>
    }
}

export default SecureRoute