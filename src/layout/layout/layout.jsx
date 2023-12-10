import {
    ApartmentOutlined,
    DatabaseOutlined,
    DownOutlined,
    FileOutlined,
    LaptopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    NotificationOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Col, Dropdown, Avatar } from 'antd';
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout;


const ContentLayout = ({ children, breadcrumb }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const signOutClickHandle = async () => {
        Cookies.remove('user-token');
        navigate('/');
    }
    const initialItems = [
        {
            label: <Link href="/user">Profile</Link>,
            key: '0',
            hasPermission: true
        },
        {
            type: 'divider',
            hasPermission: true,
            key: 'divider'
        },
        {
            icon: <UserOutlined />,
            key: '/user/something1',
            label: <Link href="/user/something">Something</Link>,
            hasPermission: true
        },
        {
            icon: <FileOutlined />,
            key: '/user/something3',
            label: <Link href="/user/something">Something</Link>,
            hasPermission: true
        },
        {
            icon: <ApartmentOutlined />,
            key: '/user/something3',
            label: <Link href="/user/something">Something</Link>,
            hasPermission: true
        },
        {
            icon: <DatabaseOutlined />,
            key: '/admin/logs',
            label: <Link href="/admin/logs">Auditēšanas pieraksti</Link>,
            //   hasPermission: userPermissions.includes(permissions.logView),
        },
        {
            label: <Button className='w-full !text-left' size='small' type='link' onClick={signOutClickHandle}>Log out</Button>,
            key: '1',
            hasPermission: true
        },
    ];
    const items = initialItems
        .filter(item => item.hasPermission)
        .map(item => {
            const { hasPermission, ...rest } = item
            return rest
        });

    const menuItems = [
        {
            key: `/user/home`,
            icon: React.createElement(UserOutlined),
            label: `subnav1`,
            onClick: () => {
                navigate('home')
            },
        },
        {
            key: `/user/about`,
            icon: React.createElement(LaptopOutlined),
            label: `subnav2`,
            onClick: () => {
                navigate('about')
            },
        },
        {
            key: `sub3`,
            icon: React.createElement(NotificationOutlined),
            label: `subnav3`,
            children: [
                {
                    key: `/user/contact`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav4`,
                    onClick: () => {
                        navigate('contact')
                    },
                },
                {
                    key: `sub5`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav5`,
                    onClick: () => {
                        navigate('about')
                    },
                },
            ]
        },
        {
            key: `/user/home2`,
            icon: React.createElement(UserOutlined),
            label: `subnav1`,
            onClick: () => {
                navigate('home')
            },
        },
        {
            key: `/user/about2`,
            icon: React.createElement(LaptopOutlined),
            label: `subnav2`,
            onClick: () => {
                navigate('about')
            },
        },
        {
            key: `sub32`,
            icon: React.createElement(NotificationOutlined),
            label: `subnav3`,
            children: [
                {
                    key: `/user/contact2`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav4`,
                    onClick: () => {
                        navigate('contact')
                    },
                },
                {
                    key: `sub52`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav5`,
                    onClick: () => {
                        navigate('about')
                    },
                },
            ]
        },
        {
            key: `/user/home3`,
            icon: React.createElement(UserOutlined),
            label: `subnav1`,
            onClick: () => {
                navigate('home')
            },
        },
        {
            key: `/user/about3`,
            icon: React.createElement(LaptopOutlined),
            label: `subnav2`,
            onClick: () => {
                navigate('about')
            },
        },
        {
            key: `sub33`,
            icon: React.createElement(NotificationOutlined),
            label: `subnav3`,
            children: [
                {
                    key: `/user/contact3`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav4`,
                    onClick: () => {
                        navigate('contact')
                    },
                },
                {
                    key: `sub53`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav5`,
                    onClick: () => {
                        navigate('about')
                    },
                },
            ]
        },
        {
            key: `/user/home34`,
            icon: React.createElement(UserOutlined),
            label: `subnav1`,
            onClick: () => {
                navigate('home')
            },
        },
        {
            key: `/user/about34`,
            icon: React.createElement(LaptopOutlined),
            label: `subnav2`,
            onClick: () => {
                navigate('about')
            },
        },
        {
            key: `sub334`,
            icon: React.createElement(NotificationOutlined),
            label: `subnav3`,
            children: [
                {
                    key: `/user/contact34`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav4`,
                    onClick: () => {
                        navigate('contact')
                    },
                },
                {
                    key: `sub534`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav5`,
                    onClick: () => {
                        navigate('about')
                    },
                },
            ]
        },
        {
            key: `/user/home345`,
            icon: React.createElement(UserOutlined),
            label: `subnav1`,
            onClick: () => {
                navigate('home')
            },
        },
        {
            key: `/user/about345`,
            icon: React.createElement(LaptopOutlined),
            label: `subnav2`,
            onClick: () => {
                navigate('about')
            },
        },
        {
            key: `sub3345`,
            icon: React.createElement(NotificationOutlined),
            label: `subnav3`,
            children: [
                {
                    key: `/user/contact345`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav4`,
                    onClick: () => {
                        navigate('contact')
                    },
                },
                {
                    key: `sub5345`,
                    icon: React.createElement(LaptopOutlined),
                    label: `subnav5`,
                    onClick: () => {
                        navigate('about')
                    },
                },
            ]
        }
    ]

    return (
        <Layout>
            <Sider className='p-2 min-h-screen overflow-auto flex flex-col' trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#663399' }}>
                <div className="demo-logo-vertical" />
                <Menu
                    className='bg-transparent text-white'
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    style={{
                        height: '100%',
                    }}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Header
                    className='flex p-4'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        width: '100%',
                        backgroundColor: '#663399'
                    }}
                >
                    <Button
                        className='border'
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined className='text-white' style={{ fontSize: '20px' }} /> : <MenuFoldOutlined className='text-white' style={{ fontSize: '20px' }} />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            border: '1px solid',
                            borderColor: 'transparent transparent transparent white',
                            borderRadius: 0,
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Col className='px-5'>
                        <Link href="/user" className="text-white text-xl">Prochz</Link>
                    </Col>
                    <Col flex="auto"></Col>
                    <Col className='flex items-center gap-x-8 px-5'>
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <button type="button" className="!bg-transparent">
                                <span className='flex items-center gap-x-3'>
                                    <span className="text-white">User</span>
                                    <Avatar
                                        style={{ backgroundColor: '#fff', color: '#663399' }}
                                        size="large"
                                        icon={<UserOutlined />}
                                    />
                                    <DownOutlined style={{ color: '#fff' }} />
                                </span>
                            </button>
                        </Dropdown>
                    </Col>
                </Header>
                <Content className='p-6'>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default ContentLayout;