var mongoose=require("mongoose");
//DEFINING THE BOOK MODEL
var bookSchema=new mongoose.Schema({
	/*DEFINE the following attributes-
    title, genre, author, description, rating (out of 5), mrp,
     */
})
module.exports=mongoose.model("Book",bookSchema);