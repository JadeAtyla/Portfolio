const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public')); // able to use public folder
app.use(express.static('views')); // able to use views folder

// Handles 404 error, or the not related routes for this link
app.get('*', (req, res)=>{
    res.send('404 erorr');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views','index1.html'));
});

app.get('/projects', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.listen(5050, ()=>{
    console.log("App listening to port 5050");
});