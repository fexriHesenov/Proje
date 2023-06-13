import React, { useState } from 'react'
import { Form, Modal, Table, Input, Button } from 'antd';

const Edit = ({isEditModalOpen, setIsEditModalOpen, categoris}) => {
  const [editingRow, setEdittingRow] = useState([]);
  const onFinish = (values)=>{
    try{
      fetch("http://localhost:5500/api/update-category", {method:"PUT",
       body:JSON.stringify(...values),
      headers:{"Content-type": "application/json; charset=UTF-8" }
      })
      // message.success("Mesul yadasa verildi");
      // form.resetFields();
      // setCategoris([
      //   ...categoris,
      //   {
      //       _id: Math.random(),
      //       title: values.title
      //   }
      // ]);
    }catch(error){
      throw error
    }
  }

  const columns = [
    {
      title: "Categoriya başlığı",
      dataIndex: "title",
      render:(_,record)=>{
        if(record._id === editingRow._id){
          return(
            <Form.Item className='mb-0'>
              <Input defaultValue={record.title}/>
            </Form.Item>
          )
        }else{
          return <p>{record.title}</p>
        }
      }
    },
    {
      title: "funksiyalar",
      dataIndex: "Actions",
      render:(text,record)=>{
        return(
          <div className='flex'>
            <Button type='link' onClick={()=>setEdittingRow(record)}>Düzəliş</Button>
            <Button type='text' htmlType='submit'>Yaddaşa ver</Button>
            <Button type='text' danger>Sil</Button>
          </div>
        )
      }
    }
  ]
  return (
    <Modal title="Categoriya Duzenlemek" 
    open={isEditModalOpen}
    onCancel={()=> setIsEditModalOpen(false)}
    footer={false}>
        <Form onFinish={onFinish}>
            <Table bordered dataSource={categoris} columns={columns}/>
        </Form>
    </Modal>
  )
}

export default Edit