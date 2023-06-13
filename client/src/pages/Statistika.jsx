import React, { useState, useEffect } from 'react';
import Header from "../componets/header/Header";
import StatistikaCart from '../componets/statistika/StatistikaCart';
import { Area,Pie } from '@ant-design/plots';


const Statistika = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };

      const data2 = [
        {
          type: '分类一',
          value: 27,
        },
        {
          type: '分类二',
          value: 25,
        },
        {
          type: '分类三',
          value: 18,
        },
        {
          type: '分类四',
          value: 15,
        },
        {
          type: '分类五',
          value: 10,
        },
        {
          type: '其他',
          value: 5,
        },
      ];
      const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
          range: [0, 1],
        },
      };

      const config2 = {
        appendPadding: 10,
        data:data2,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'AntV\nG2Plot',
          },
        },
      };
  return (
    <div>
       <Header />
       <h1 className="text-4xl font-bold text-center mb-5">Statistika</h1>
       <div>
            <h2 className='text-lg pl-6'>Xoş Gəldiniz <span className='text-green-600 font-bold text-xl'>Admin</span> </h2>

            <div className='statistik-card grid xl:grid-cols-4 md:grid-cols-2 gap-10 m-10'>
              <StatistikaCart title={"Toplam Müştəri"} count={"10"} img={"img/user.png"}/>
              <StatistikaCart title={"Toplam Kazanç"} count={"1266.84 AZN"} img={"img/pull.png"}/>
              <StatistikaCart title={"Toplam Satış"} count={"7"} img={"img/sale.png"}/>
              <StatistikaCart title={"Toplam Ürün"} count={"26"} img={"img/toplam.png"}/>
            </div>
            <div className='flex lg:flex-row flex-col items-center gap-10 p-2'>
                <div className='lg:w-1/2'>
                   <Area {...config} />  
                </div>
                <div className='lg:w-1/2 mb-40'>
                <Pie {...config2} />    
                </div>
            </div>
          
       </div>
    </div>
  )
}

export default Statistika
