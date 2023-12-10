import { Outlet } from "react-router-dom"
import ContentLayout from "../../layout/layout/layout"

const User = () => {
    

    return (
        <div className='min-h-screen flex flex-col'>
            <ContentLayout>
                <Outlet />
            </ContentLayout>
        </div>
    )
}

export default User