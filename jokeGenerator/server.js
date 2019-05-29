const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require("./routes/user.routes");


app.use(bodyParser.json());

app.use(express.static(__dirname+"/dist"))



app.use("/user", userRoutes);

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT, console.log(`Listening on Port ${PORT}`));