

const Products = () => {
  return (
    <div className="products-wrapper grid grid-cols-card gap-4">
        <div className="product-itme border hover:shadow-lg cursor-pointer transition-all select-none">
            <div className="product-img">
                <img src="https://imgrosetta.mynet.com.tr/file/15681377/15681377-728xauto.png" alt=""  className="h-28 object-cover w-full border-b"/>
            </div>
            <div className="Product-info flex flex-col p-2">
                <span className="font-bold ">Lahmacun</span>
                <span>5 AZN</span>
            </div>
        </div>

        
        
    </div>
  )
}

export default Products
