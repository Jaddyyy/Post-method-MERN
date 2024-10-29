const mongoose = require ('mongoose')

const dbConnection = async() =>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB is connected'.bgGreen)
  } catch (error) {
    console.log('Error in connecting DB'.bgRed)
  }
}
module.exports = dbConnection;
