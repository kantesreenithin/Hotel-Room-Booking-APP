const mongoose = require('mongoose');

 // Connect Mongodb Database


 mongoose.connect('mongodb://localhost:27017/Rooms')
 .catch (error => console.log(error))
 .then(() => console.log('Connected Successfully'))

//  var url = 'mongodb+srv://bnr6762:bnr6762@cluster0.poudceg.mongodb.net/Rooms'
// mongoose.connect(url, { useUnifiedTopology : true ,useNewUrlParser: true })
// var connection = mongoose.Connection
// connection.on('error',()=>{
//     console.log('connection failed');
// })   
// connection.on('connected',()=>{
//     console.log('connection Successful');
// })
    


module.exports = mongoose

// require('./employee.model');