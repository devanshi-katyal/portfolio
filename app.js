const express= require("express");

const bodyparser= require("body-parser");
const ejs= require("ejs");
//---------------------------------------------doing stuff to make them work-----------------------------------------------------------------
const app = express();
//for ejs
app.set('view engine', 'ejs');
//for bodyparser
app.use(bodyparser.urlencoded({extended:true}));
//express for using css
app.use(express.static("public"));
var measuredate=  Math.ceil((Math.abs(new Date() -new Date('09/06/2020'))) / (1000 * 60 * 60 * 24))+65;
//get functions
app.get("/", function(req,res){
  res.render("index", {current: measuredate})
})
app.get("/projects", function(req,res){
  res.render("projects")
})
  app.listen(3000, function(req,res){
    console.log("server working on port 3000");
  })
