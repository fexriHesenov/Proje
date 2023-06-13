import { Button, Form, Input, Carousel } from 'antd'
import React from 'react'

const Register = () => {
  return (
    <div className='h-screen'>
        <div className='flex h-full'>
            <div className='flex flex-col h-full justify-center px-14 text-center xl:w-2/6 w-full'>
                <h1 className='text-5xl font-bold mb-2'>DIP</h1>
                <Form layout='vertical'>
                    <Form.Item 
                    label='İstifadəçi adı'
                    name={"username"}
                    rules={
                        [
                            {
                                required:true,
                                message:"İstifadəçi adını boş buraxmayın"
                            }
                        ]
                    }
                    >
                        <Input placeholder='İstifadəçi adınızı daxil edin...'/>
                    </Form.Item>
                    <Form.Item 
                    label='Email'
                    name={"email"}
                    rules={
                        [
                            {
                                required:true,
                                message:"Email'i boş buraxmayın"
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
                                required:true,
                                message:"Parol daxil edin"
                            }
                        ]
                    }
                    >
                        <Input.Password placeholder='Parolu daxil edin...'/>
                    </Form.Item>
                    <Form.Item 
                    label='Təkrar Parol'
                    name={"secondPassword"}
                    rules={
                        [
                            {
                                required:true,
                                message:"Parolu təkrar daxil edin"
                            }
                        ]
                    }
                    >
                        <Input.Password placeholder='Parolu tekarar daxil edin...'/>
                    </Form.Item>
                </Form>
                <Button type="primary" className='primary py-5 flex items-center justify-center'>Qeydiyyatdan Keç</Button>
                <h3 className='relative bottom-[-115px]'>Bir hesabıvız var ? <a className='text-[#1677ff]' href={"Login"}>İndi daxil ol</a></h3>
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

export default Register