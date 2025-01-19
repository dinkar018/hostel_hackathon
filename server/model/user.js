const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 id:{
        type:String,
       
      
       },
 hostel:{
           type:String,
         
 },
contact:{
    type:String,
    
},
domain:{
    type:String,
  

},
details:{
   type:String,
 
},
urgency:{
   type:String,
   

},

subdomain:{
    type:String,
    
},

Time:{
  type:String,

}

})
          
module.exports= mongoose.model("user",userSchema);



