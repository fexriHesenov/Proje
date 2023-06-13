import { Form, Input, Button, Checkbox, Carousel } from 'antd'
import React from 'react'

const Login = () => {
  return (
    <div className='h-screen'>
        <div className='flex h-full'>
            <div className='xl:w-2/6 h-full w-full flex flex-col justify-center text-center px-14'>
                <h1 className='text-5xl font-bold mb-2'>DIP</h1>
                <Form layout='vertical'>
                    <Form.Item 
                        label='Email'
                        name={"email"}
                        rules={
                            [
                                {
                                    required: true,
                                    message: "Email'i daxil edin"
                                }
                            ]
                        }
                    >
                        <Input placeholder="Email'i daxil edin..."/>
                    </Form.Item>
                    <Form.Item 
                        label='Parol'
                        name={"password"}
                        rules={
                            [
                                {
                                    required: true,
                                    message: "Parol daxil edin"
                                }
                            ]
                        }
                    >
                        <Input.Password placeholder="Parol daxil edin..."/>
                    </Form.Item>
                    <Form.Item className='w-full'>
                        <div className='flex justify-between'>
                            <Checkbox>Məni yaddaşda saxla</Checkbox>
                            <a href={"Register"} className='xl:text-right'>Parolu unutmusan ?</a>
                        </div>
                    </Form.Item>
                </Form>
                <Button type="primary" className='primary py-5 flex items-center justify-center'>Qeydiyyatdan Keç</Button>
                <h3 className='relative bottom-[-170px]'>Hələdə bir hesabıvız yoxdu ? <a className='text-[#1677ff]' href={"Register"}>İndi qeyd ol</a></h3>
            </div>
            <div className='lg:w-4/6 md:w-0 bg-[#6c63ff]'>
                <div className='h-screen'>
                    <Carousel className='h-screen '>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login