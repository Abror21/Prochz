import {
    ApartmentOutlined,
    DatabaseOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, Button, theme } from 'antd';
  import Cookies from "js-cookie";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom"
  
  const { Header, Sider, Content } = Layout;


const HeaderTest = () => {
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
    // const items = initialItems
    //     .filter(item => item.hasPermission)
    //     .map(item => {
    //         const { hasPermission, ...rest } = item
    //         return rest
    //     });
    return (

        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}

export default HeaderTest;

// <AntHeader style={{ width: '100%', backgroundColor: '#663399' }}>
//     <Row wrap={false} gutter={[42, 0]}>
//         <Col>
//             <MenuOutlined fill="red" />
//         </Col>
//         <Col>
//             <Link href="/user" className="text-white text-xl">Prochz</Link>
//         </Col>
//         <Col flex="auto"></Col>
//         <Col className='flex items-center gap-x-8'>
//             <Dropdown menu={{ items: items }} trigger={['click']}>
//                 <button type="button" className="!bg-transparent">
//                     <span className='flex items-center gap-x-3'>
//                         <span className="text-white">User</span>
//                         <Avatar
//                             style={{ backgroundColor: '#fff', color: '#663399' }}
//                             size="large"
//                             icon={<UserOutlined />}
//                         />
//                         <DownOutlined style={{ color: '#fff' }} />
//                     </span>
//                 </button>
//             </Dropdown>
//         </Col>
//     </Row>
// </AntHeader>