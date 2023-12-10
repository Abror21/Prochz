import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const SecureRoute = ({ children }) => {
    const token = Cookies.get('user-token');

    if (!token) {
        return <Navigate to="/" replace={true} />
    } else {
        return <>{children}</>
    }
}

export default SecureRoute