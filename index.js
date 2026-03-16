const express = require("express");
const port = 3001;

const app = express();
app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).send({
        message:"This is a HomePage!!"
    })
})

app.use((req, res) => {
    res.status(404).send({
        message: "Route not found"
    });
});

app.listen(port,()=>{
    console.log(`listeneing to port http://localhost/${port}`);
})