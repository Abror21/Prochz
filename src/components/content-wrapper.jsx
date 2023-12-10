import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ContentWrapper = ({ children, breadcrumb, title }) => {
    return (
        <>
            <Breadcrumb
                className='mb-6'
                items={breadcrumb}
            />
            <h1 className="mb-6 text-2xl font-semibold">{title}</h1>
            {children}
        </>
    )
}

export default ContentWrapper