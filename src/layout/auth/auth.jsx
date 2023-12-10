import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import useHandleError from '../../hooks/useHandleError';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [handleError] = useHandleError();

  const onFinish = (values) => {
    setLoading(true)
    axios.post(`${process.env.REACT_APP_BASE_URL}/token/`,{
      username: values.username,
      password: values.password
    })
    .then(function (response) {
      if(response.statusText === "OK" && response.data?.access){
        Cookies.set('user-token', response.data.access);
        navigate("/user");
      }
    })
    .catch(function (error) {
      handleError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  };

  if(Cookies.get('user-token')){
    return <Navigate to="/user" />
  }

  return (
    <div className="w-full bg-gray-200">
      <div className="mx-auto max-w-md">
        <main className="content">
          <div className='container h-screen mx-aut'>
            <div className='flex p-3 flex-auto mx-auto h-screen flex-row'>
              <div className='basis-full bg-white border border-gray-300 rounded-md mx-auto max-w-[350px] h-fit self-center p-6'>
                <Title level={2} className='text-center mb-4'>Prochz</Title>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 8 }}
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'This field is required' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'This field is required' }]}
                  >
                    <Input.Password autoComplete="off" />
                  </Form.Item>

                  <Form.Item>
                    <Button type='primary' htmlType="submit" loading={loading}>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Auth