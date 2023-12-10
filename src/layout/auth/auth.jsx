import { Button, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';

const Auth = () => {
  const [form] = Form.useForm()
  if(localStorage.getItem('user-token')){
    console.log('token: ', localStorage.getItem('user-token'));
  }

  const onFinish = (values) => {
    console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);
    console.log('values: ', values);
    axios.post(`${process.env.REACT_APP_BASE_URL}/token/`,{
      username: values.username,
      password: values.password
    })
    .then(function (response) {
      if(response.statusText === "OK" && response.data?.access){
        localStorage.setItem('user-token', response.data.access)
      }
    })
    .catch(function (error) {
      console.log("error: ", error);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
                    <Button type='primary' htmlType="submit">
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