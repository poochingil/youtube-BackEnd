//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const mysql = require("mysql");

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database:'carrental',
  port:3325
});
connection.connect((error)=>{
  if(error){
    console.log(error)

  }else{
    console.log('Database connected')
  }
});
app.get("/",(res,req)=>{
    
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });