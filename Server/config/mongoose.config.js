const mongoose = require('mongoose')
const db = 'FOOOOOD'

mongoose.connect(`mongodb://127.0.0.1/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=>console.log('Got a db!') )
    .catch( err=>console.log("Beep! Bad db! " + err) )