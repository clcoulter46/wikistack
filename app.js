const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
  res.send("hello world");
})

app.listen(3000,()=>{
  console.log(`app listening in port 3000`)
})
