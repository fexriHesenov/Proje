import React from 'react'
import { Modal,Form,Input, Button, message } from 'antd';

const Add = ({isAddModalOpen
    , setIsAddModalOpen
    , categoris
    , setCategoris
    }) => {

    const [form]=Form.useForm();    

    const onFinish=(values)=>{
        try{
          fetch("http://localhost:5500/api/Category", {method:"POST", body:JSON.stringify(values),
            headers:{"Content-type": "application/json; charset=UTF-8" }
          })
          message.success("Mesul yadasa verildi");
          form.resetFields();
          setCategoris([
            ...categoris,
            {
                _id: Math.random(),
                title: values.title
            }
          ]);
        }catch(error){
          throw error
        }
    }

  return (
    <Modal title="Categoriya Elave elemek" 
    open={isAddModalOpen} 
    onCancel={()=>setIsAddModalOpen(false)}
    footer={false}>
        <Form layout='vertical' onFinish={onFinish} form={form}>
            <Form.Item name="title" label="Kategori elave edin" 
            rules={[{required: true, message:"Bos yer buramayin ey insan"}]}>
                <Input/>
            </Form.Item>
            <Form.Item className='flex justify-end'>
               <Button type='primary' htmlType='submit' className='btn-pramire'>Yarad</Button>
            </Form.Item>
        </Form>
    </Modal>
  )
}

export default Add