const Mongoose=require("mongoose")

let rSchema=Mongoose.Schema(
    {
        title:String,
        description:String,
        ingredient:String,
        cateogry:String,
        preparedBy:String



    }
)
 
module.exports=Mongoose.model("app",rSchema)

