const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 id:{
        type:String,
        unique:true,
        required:true,
       },
 hostel:{
           type:String,
           required:true,
 },
contact:{
    type:String,
    required:true,
    unique:true,
},
domain:{
    type:String,
    required:true,

},
details:{
   type:String,
   required:true,
},
urgency:{
   type:String,
   

},

subdomain:{
    type:String,
    
},

Time:{
  type:String,
  required:true,
}

})
          
module.exports= mongoose.model("user",userSchema);



