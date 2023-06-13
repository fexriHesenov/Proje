import React from 'react'
import { Button } from 'antd';
import { ClearOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons';



const CardTotals = () => {
  return (
    <div className='card h-full max-h-[calc(100vh_-_90px)] flex flex-col border  '>
        <h2 className='bg-blue-500 text-center px-8 py-4 text-white font-bold '>Səbətdəki məhsul</h2>
        
     <ul className='cart-items flex flex-col px-2 gap-y-3 pt-2 overflow-y-auto'>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt="" className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-3'>
                <strong>Lahmacun</strong>
                <span>5 AZN x 2</span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<PlusCircleOutlined/>} />
          <strong>1</strong>
          <Button type="primary" className='btn-pramire flex justify-center items-center' size='middle' shape="circle" icon={<MinusCircleOutlined />} />
          </div>
        </li>
     </ul>
        <div className='cart-totals mt-auto'>
            <div className='border-y'>
                <div className='flex justify-between p-3'>
                    <strong>Məbləğ</strong>
                    <span>100 AZN</span>
                </div>
              
                 <div className='flex justify-between p-3'>
                    <strong>ƏDV 18%</strong>
                    <span className='text-red-600'>18 AZN</span>
                </div>
                <div className='border-t'>
                  <div className='flex justify-between p-3'>
                      <strong className='text-lg text-green-600'>Toplam Məbləğ</strong>
                      <span className='text-lg'>118 AZN</span>
                  </div>
                </div>
                <div className='py-5 px-2'>
                <Button type="primary" className='btn-pramire w-full py-5 flex items-center justify-center'>Sipariş ver</Button>
                <Button type="primary" danger icon={<ClearOutlined />} className="w-full flex items-center justify-center mt-2 py-5">Təmizlə</Button>
                </div>
              
               
            </div>
        </div>
    </div>
    

    
  )
}

export default CardTotals
