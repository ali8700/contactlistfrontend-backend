const mongoose = require('mongoose')

const connectddb=async()=>{
    try{
        //tekhou path de data base , nelguouh ki nruni el mongo 
        // adha el // el el cmd mongo nelgua hekel path el uri /
        //y3ref data win mwjouda bil atlas kifkif 
        //link like this dont forget it 
        //
await mongoose.connect("mongodb+srv://alirhouma870:fZOeF80yOeCDN5GC@cluster0.lpvwv8x.mongodb.net/?retryWrites=true&w=majority")
console.log('db is connected')
    }catch(err){
console.log(err)
    }
}

module.exports = connectddb;