require("dotenv").config();
const app = require("./app"); 
const connectDatabase = require("./config/database"); 
const PORT = process.env.PORT || 3000; 

const initiateServer = () => {
    connectDatabase(); 
    app.listen(() => {
        console.log(`SERVER RUNNING AT PORT ${PORT}`); 
    }); 
}

initiateServer(); 