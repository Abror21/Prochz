import {
    ApartmentOutlined,
    DatabaseOutlined,
    DownOutlined,
    FileOutlined,
    LaptopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    NotificationOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Col, Dropdown, Avatar } from 'antd';
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const { Header, Sider, Content } = Layout;


const ContentLayout = ({ children }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
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

    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        if (index < 2) {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,
            };
        } else {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,
                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: `option${subKey}`,
                    };
                }),
            };
        }
    });

    return (
        <Layout>
            <Sider className='p-4' trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#663399' }}>
                <div className="demo-logo-vertical" />
                <Menu
                    className='bg-transparent text-white'
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                    }}
                    items={items2}
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
                        icon={collapsed ? <MenuUnfoldOutlined className='text-white' /> : <MenuFoldOutlined className='text-white' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            border: '1px solid',
                            borderColor: 'transparent transparent transparent transparent white',
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
                <Content
                    style={{
                        margin: '24px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default ContentLayout;