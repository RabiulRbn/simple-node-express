const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my first node YAY!!')
})

const users = [
    {id:0,name: 'sahana', gmail:'sabana@gmail.com',phone:'01724825545'},
    { id: 1, name: 'sahanoor', email:'sahanoor@gmail.com',phone:'01724825545'},
    { id: 2, name: 'srabonti', gmail:'srabonti@gmail.com',phone:'01724825545'},
    { id: 3, name: 'kabana', gmail:'kabanaa@gmail.com',phone:'01724825545'},
    { id: 4, name: 'cabana', gmail:'cabana@gmail.com',phone:'01724825545'},
    { id: 5, name: 'jaaban', gmail:'aaban@gmail.com',phone:'01724825545'}
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
   else{
        res.send(users)
   }
})

// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    
   console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('listening my port',port)
})