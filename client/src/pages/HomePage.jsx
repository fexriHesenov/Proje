import React, { useEffect, useState } from 'react'
import Header from "../componets/header/Header";
import CardTotals from "../componets/home/CardTotals";
import Catagories from "../componets/home/Catagories";
import Products from "../componets/home/Products";

const HomePage = () => {
  const [categoris, setCategoris]=useState([]);

  useEffect(()=> {
    const getCategories = async()=>{
      try{
        const res = await fetch("http://localhost:5500/api/get-all");
        const data = await res.json();
        setCategoris(data);
      }catch(error){
        console.log(error);
      }
    }
    getCategories();

  },[])

  return (
    <div>
         <Header/>
         <div className="Home px-6 flex justify-between gap-10">
            <div className="categories overflow-auto max-h-[calc(100vh-110px)]">
                <div><Catagories categoris={categoris} setCategoris={setCategoris}/></div>
            </div>
            <div className="products flex-[8]">
                  <Products/>
            </div>
            <div className="cartTotals min-w-[300px] ">
                  <CardTotals/>
            </div>
         </div>
    </div>
  )
}

export default HomePage
