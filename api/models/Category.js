const  mongoose=require("mongoose");

const CategorySchema=mongoose.Schema(
    {
        title: {type: String, require:true },
    },
    {timestamps:true}
)

const Category=mongoose.model("categors",CategorySchema);

module.exports=Category;