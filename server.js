require("express-async-errors");
const dotenv = require("dotenv").config();   
const app = require("./app");

const port = process.env.PORT || 5006;

app.listen(port,() => { 
    console.log(`Server running on port ${port}`);
});