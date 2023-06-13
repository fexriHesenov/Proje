import { Table} from "antd";
import React from "react";
import { useState } from 'react';
import Header from "../componets/header/Header";



const BillPage = () => {
    const[isModalOpen]=useState(false)
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
      <h1 className="text-4xl font-bold text-center mb-5">Musteriler</h1>
      <div className="px-5">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      
    </div>
  );
};

export default BillPage;
