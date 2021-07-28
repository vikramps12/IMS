const express = require("express");
const app = express();
const path = require("path");
const PORT  = 5000

app.use(express.json())
app.use(require("./routes/route"))

app.listen(PORT,()=>{
    console.log("server is running in",PORT);
})