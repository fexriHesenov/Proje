const  mongoose=require("mongoose");


const BillSchema=mongoose.Schema(
    {
        customerName: {type:String, require:true},
        customerPhoneNumber: {type:String, require:true},
        paymentMode: {type:String, require:true},
        subTotal: {type:Number, require:true},
    },
    {timestamps:true}
)

const Bill=mongoose.model("bill",BillSchema);

module.exports=Bill;