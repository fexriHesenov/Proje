import React from 'react'

const StatistikaCart = ({title,count,img}) => {
  return (
    <div className='card-item bg-gray-800 p-10 rounded-2xl'>
    <div className='flex gap-x-5'>
        <div className='bg-white w-16 h-16 p-3 rounded-full'>
            <img src={img} alt="" />
        </div>
        <div className='text-white'>
            <p className='mb-2 text-lg font-medium text-gray-400'>{title}</p>
            <p className='text-gray-100 text-xl font-medium'>{count}</p>
        </div>
    </div>
</div>
  )
}

export default StatistikaCart
