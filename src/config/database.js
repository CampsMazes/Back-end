const mongoose = require("mongoose"); 
const connectDatabase = async () => {
    try{
        await mongoose.connect(process.env.DB_URL); 
        console.log("Database connected"); 
        return; 
    }
    catch(err){
        console.log(err); 
    }
}

module.exports = connectDatabase; 