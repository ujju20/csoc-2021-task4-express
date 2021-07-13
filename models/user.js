var mongoose=require("mongoose");
var	passportLocal=require("passport-local-mongoose");
//DEFINING THE USER MODEL
var userSchema=new mongoose.Schema({

	//DEFINE USERNAME AND PASSSWORD ATTRIBUTES


    loaned_books:[
        //embed reference to id's of book copies loaned by this particular user
    ]
})
userSchema.plugin(passportLocal);
module.exports=mongoose.model("User",userSchema);