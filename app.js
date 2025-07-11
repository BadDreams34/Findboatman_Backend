const express = require('express')
const {Get, AddUser} = require('./queries')
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.post('/add', async (req, res)=>{
    console.log("recieved")
    try {
         await AddUser(req.body.name, req.body.score)
    const users = await Get()
    return res.status(201).json(users)

    } catch(err) {
        console.log(err)
    }
   

})
app.get('/',(req,res)=>{
    res.send('Hello')
})



app.listen(5010, ()=> {
    console.log("listening to 5003")
})