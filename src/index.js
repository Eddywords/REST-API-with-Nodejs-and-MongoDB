const express = require('express');

const { json } = require('express');

const connect = require('./config/database')

const todoRoute = require('./router/todoRoutes');

connect()

const app = express();
app.use(json());
app.use('/todo', todoRoute);




const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send("Zuri ToDo task on MongoDB");
})

app.listen(3000, () => console.log('Server is up on 3000'));