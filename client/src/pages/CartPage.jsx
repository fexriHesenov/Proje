import { Table,Card,Button,Modal,Form,Input,Select } from "antd";
import React from "react";
import { useState } from 'react';
import Header from "../componets/header/Header";



const CartPage = () => {
    const[isModalOpen, setModalOpen]=useState(false)
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  console.log(isModalOpen);

  return (
    <div>
      <Header />
      <div className="px-5">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      <div className="flex justify-end p-5">
        <Card
          style={{
            width: 300,
          }}
        >
          <p>
            <div className="flex justify-between p-3">
              <strong>Məbləğ</strong>
              <span>100 AZN</span>
            </div>
          </p>
          <p>
            <div className="flex justify-between p-3">
              <strong>ƏDV 18%</strong>
              <span className="text-red-600">18 AZN</span>
            </div>
          </p>
          <p>
            
            <div className="flex justify-between p-3">
              <strong className="text-lg text-green-600">Toplam Məbləğ</strong>
              <span className="text-lg">118 AZN</span>
            </div>
          </p>
          <Button type="primary" className='btn-pramire w-full py-5 flex items-center justify-center' onClick={()=>setModalOpen(true)}>Sipariş ver</Button>
        </Card>
      </div>
      <Modal title="Basic Modal" 
      open={isModalOpen} 
      onCancel={()=>setModalOpen(false)} 
      footer={false}

      >
          <Form layout="vertical">
              <Form.Item 
              label="Müşteri Adı" 
              rules={[
                {
                  required: true,
                  message: 'Müştəri adını daxil edin',
                },
              ]}
              name={"Ad"}
              // rules={[
              
              //   {
              //     required: true,
              //     message: 'Please input your E-mail!',
              //   },
              // ]}
              >
                  <Input placeholder="Müətəri adini daxil edin" />
              </Form.Item>
              <Form.Item label="Tel No"  rules={[
                {
                  required: true,
                  message: 'Müştəri adını daxil edin',
                },
              ]} name={"Telfon"}>
                  <Input placeholder="Telfon Nömrənizi daxil edin" maxLength={11}/>
              </Form.Item>
              <Form.Item label="Ödəmə forması" rules={[{required:true}]} name={"OdemeFormasi"}>
                  <Select placeholder="Ödəniş formasını seçin">
                        <Select.Option value="Nəğd">Nəğd</Select.Option>
                        <Select.Option value="Kart">Kart</Select.Option>
                  </Select>
              </Form.Item>
              
              
          </Form>
          <div className="flex justify-end">
        <Card className="w-full">
          <p>
            <div className="flex justify-between p-3">
              <strong>Məbləğ</strong>
              <span>100 AZN</span>
            </div>
          </p>
          <p>
            <div className="flex justify-between p-3">
              <strong>ƏDV 18%</strong>
              <span className="text-red-600">18 AZN</span>
            </div>
          </p>
          <p>
            
            <div className="flex justify-between p-3">
              <strong className="text-lg text-green-600">Toplam Məbləğ</strong>
              <span className="text-lg">118 AZN</span>
            </div>
          </p>
          <div className="flex justify-end">
            <Button type="primary" 
            className='btn-pramire'
           
            onClick={()=>setModalOpen(true)}>Sipariş ver</Button>
          </div>
          
        </Card>
      </div>

      </Modal>
    </div>
  );
};

export default CartPage;
