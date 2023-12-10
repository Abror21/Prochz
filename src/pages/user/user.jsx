import { Outlet } from "react-router-dom";
import HeaderTest from "../../layout/header/header";

const User = () => {
    

    return (
        <div className='min-h-screen flex flex-col'>
            <HeaderTest />
            <Outlet />
        </div>
    )
}

export default User