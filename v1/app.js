var express=require("express");
var app= express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
var camp=
[
    {name:"Lonavala",image:"https://image.freepik.com/free-photo/view-night-forest-from-tent_23-2148301408.jpg"},
    {name:"Matheran",image:"https://image.freepik.com/free-photo/blue-tent-grassy-hill-with-mountains-clear-sky_181624-5448.jpg"},
    {name:"Deccan" ,image:"https://image.freepik.com/free-photo/long-shot-man-looking-forest-his-tent_23-2148301277.jpg"},
    {name:"Lonavala",image:"https://image.freepik.com/free-photo/view-night-forest-from-tent_23-2148301408.jpg"},
    {name:"Matheran",image:"https://image.freepik.com/free-photo/blue-tent-grassy-hill-with-mountains-clear-sky_181624-5448.jpg"},
    {name:"Deccan" ,image:"https://image.freepik.com/free-photo/long-shot-man-looking-forest-his-tent_23-2148301277.jpg"},
    {name:"Lonavala",image:"https://image.freepik.com/free-photo/view-night-forest-from-tent_23-2148301408.jpg"},
    {name:"Matheran",image:"https://image.freepik.com/free-photo/blue-tent-grassy-hill-with-mountains-clear-sky_181624-5448.jpg"},
    {name:"Deccan" ,image:"https://image.freepik.com/free-photo/long-shot-man-looking-forest-his-tent_23-2148301277.jpg"}
];

app.get("/",function(req,res) {
   res.render("landing"); 
});

app.get("/camp",function(req,res) {
   
    res.render("camp",{camp:camp}); 

 });
 //This is used to create a new campaground
 app.get("/camp/newcamp",function(req,res){
     res.render("newcamp");


 });

 //This is the Post route to post a newcamp to the main page 
 app.post("/camp",function(req,res){
     var image=req.body.image;
     var name=req.body.name;
     var newCamp={name:name,image:image};
     camp.push(newCamp);
     res.redirect("/camp");

     

 });
 




app.listen(3000,function(){
    console.log("The Yelcamp Server has started");

});