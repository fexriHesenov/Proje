import { useState,React } from 'react'
import "./style.css";
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import Add from './Add';
import Edit from './Edit';


const Catagories = ({categoris,setCategoris}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className='flex flex-col gap-y-4'>
        <li className='catagory-item' >Hamsi</li>

        {categoris.map((item)=>(
          <li className='catagory-item'>
            <span>{item.title}</span>
          </li>
        ))}
        
        <li className='catagory-item !bg-purple-800 hover:opacity-90'
        onClick={()=>setIsAddModalOpen(true)} >
        <PlusOutlined className='md:text-2xl'/>
        </li>
        <li className='catagory-item !bg-orange-800 hover:opacity-90'
        onClick={()=>setIsEditModalOpen(true)} >
        <EditOutlined className='md:text-2xl'/>
        </li>
        <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} categoris={categoris} setCategoris={setCategoris}/>
        <Edit isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} categoris={categoris}/>
    </ul>
  )
}

export default Catagories
