const express = require ('express');
const cors = require ('cors');
const app = express();
//const port = process.env.PORT || 5000;
const port = 5000;
app.use(cors());
app.use(express.json());

const users =[
    {id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '01799988891'},
    {id: 1, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '01799988892'},
    {id: 2, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01799988893'},
    {id: 3, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01799988894'},
    {id: 4, name: 'susmita', email: 'susmita@gmail.com', phone: '01799988895'},
    {id: 5, name: 'suniya', email: 'suniya@gmail.com', phone: '01799988896'}
]

app.get('/', (req, res)=>{
    res.send('This is my second node server hi baby!')
});

app.get('/users', (req, res)=>{
    const search =req.query.search;
//use query parameter
    if(search){
const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
    }
    else{
        res.send(users);
    }
   
});
//app method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('post hitting',req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get('/users/:id',(req, res)=>{
    const id= req.params.id;
    const user = users[id];
    res.send(user);
   
});
app.get('/fruits', (req, res)=>{
    res.send('[ mango, oranges, banana]')
})

app.get('/fruits/mangoes/fazli',(req, res)=>{
    res.send('Yummy Yummy tolk marka fazli')
})

app.listen(port, ()=>{
    console.log('hi, it is second node js', port)
});