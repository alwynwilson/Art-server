const mongoose = require('mongoose')
const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log("Mongodb Atlas is connected with server");
}).catch((err)=>{
    console.log("MongoDb Atlas failed to connect");
    console.log(err);
})