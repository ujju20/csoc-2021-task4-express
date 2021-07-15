var mongoose=require("mongoose");
//DEFINING THE BOOK MODEL
var bookSchema=new mongoose.Schema({
	/*TODO: DEFINE the following attributes-
    title, genre, author, description, rating (out of 5), mrp, available_copies(instances).
     */
    title:String,
    genre:String,
    authout:String,
    description:String,
    rating:Number,
    mrp:Number,
    available_copies:Number
})
module.exports=mongoose.model("Book",bookSchema);