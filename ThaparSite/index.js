const express = require("express");
const bodyParser = require("body-parser");
const path=require('path');
const ejs =require('ejs');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('.'));





app.get("/",function(req,res){
    return res.render("home",{
        title: "Almanac"});
   
    });
app.get("/discro",function(req,res){
    return res.render("discro",{
        title: "Discro"});
       
    });
app.get("/sociate",function(req,res){
        return res.render("sociate",{
            title: "Sociate"});
           
     });
app.get("/herupa",function(req,res){
    return res.render("herupa",{
        title: "Herupa"});
       
    });
app.get("/unacademic",function(req,res){
    return res.render("unacademic",{
        title: "UnAcedemic"});
       
    });



app.listen(3000,function(){
console.log("Hello")
});