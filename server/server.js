const express = require ('express')
const dotenv = require ('dotenv')
const colors = require ('colors')
const bcrypt = require ('bcrypt')
const dbConnection = require('./db/dbConnection')
const User = require ('./model/userSchema')
const cors= require("cors")

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.post('/register', async(req, res) =>{
  const {name, email, password, address, contact} = req.body
  if (!name || !email || ! password || !address || !contact) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }
  const checkemail = await User.findOne({email})
  if (checkemail) {
    return res.status(400).json({ msg: 'Email already exists' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({name, email, password:hashedPassword, address, contact}).save()
  if (user){
    return res.status(200).json({ msg: 'User created successfully' })
  }else{
    return res.status(400).json({ msg: 'Failed to create user' })
  }
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  dbConnection()
  console.log(`Server is running on port ${PORT}`.bgMagenta)
}) 