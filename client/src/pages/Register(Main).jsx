import { Form } from "antd";
import Input from "antd/es/input/Input";
const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <div className="flex flex-col h-full justify-center px-10 xl:w-2/6">
          <h1 className="text-center w-full text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="İstifadəçi adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "istifadeci adini bos buraxmayin",
                },
              ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name={"Email"}
              rules={[
                {
                  required: true,
                  message: "Email bos buraxmayin",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Sifre"
              name={"sifre"}
              rules={[
                {
                  required: true,
                  message: "sifreni bos buraxmayin",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Sifreni Tekrarla"
              name={"sifreTekrar"}
              rules={[
                {
                  required: true,
                  message: "sifreni bos buraxmayin",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
        <div className="xl:w-4/6 w-full bg-[#6C63FF]">
              
        </div>
      </div>
    </div>
  );
};

export default Register;
