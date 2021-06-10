const express = require("express");
const mongoose = require("mongoose");
const PORT=5000;
const app = express();
const todoroutes = require("./routes/todoitems");
const cors = require('cors');
const connectionoptions = {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:false};

mongoose.connect("mongodb://localhost/TodoList",connectionoptions)
.then(()=>console.log("connected successfully"))
.catch((err)=>console.error(err));

app.use(express.json());
app.use(cors());

app.use("/todos",todoroutes);

app.listen(PORT,()=>{
    console.log("The server is listening on " + PORT);
})