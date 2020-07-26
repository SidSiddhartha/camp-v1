var express=require("express");
var app= express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true,useUnifiedTopology: true});

//CREATE A SCHEMA 
var campSchema= new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var Camp=mongoose.model("Camp",campSchema);
 
//Camp.create({
//    name:"Ladakh",
//    image:"https://image.freepik.com/free-photo/leh-gompa-lungta-prayer-flags-ladakh_163782-3702.jpg",
//    description:"Ladakh is one of the most blissful and peaceful places in the world and it has truly been effective spiritually and helped people"
//
//},function(err,camp){
//    if(err)
//    {
//        console.log(err);
//    }
//    else{
//        console.log("Added to DB");
//        console.log(camp);
//    }
//});




app.get("/",function(req,res) {
   res.render("landing"); 
});

app.get("/camp",function(req,res) {
    // Retrieve all the camp grounds from the data base 
    Camp.find({},function(err,allcamps){
        if(err)
        {
            console.log(err);
        }else{
            res.render("camp",{camp:allcamps});
        }
    });
 });
 //This is used to create a new campaground
 app.get("/camp/newcamp",function(req,res){
     res.render("newcamp");


 });

 //SHOW
 app.get("/camp/:id",function(req,res){
    Camp.findById(req.params.id,function(err,showcamp){
        if(err)
        {
            console.log(err);
        }
        else{
            res.render("show",{camp:showcamp});
            
        }
    });
 });

 //This is the Post route to post a newcamp to the main page 
 app.post("/camp",function(req,res){
     var image=req.body.image;
     var name=req.body.name;
     var desc=req.body.description;
     var newCamp={name:name,image:image,description:desc};
     Camp.create(newCamp,function(err,createcamp){
         if(err)
         {
             console.log(err);
         }else{
             console.log("Added");
             res.redirect("/camp");
             
         }
     });
 });
 




app.listen(3000,function(){
    console.log("The Yelcamp Server has started");

});