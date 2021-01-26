// requiring packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["buy food", "cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("../public"));

app.get("/", (req, res) => {

   const today = new Date();
   fullDateConfig = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
   
   };

   const date = today.toLocaleDateString("en-US", fullDateConfig);
   res.render('list', {kindOfDay : date, newListItems: items});

});

app.post("/", (req, res) => {
   let newItem = req.body.newItem;
   items.push(newItem);
   res.redirect("/");
});

app.listen(3000, () => console.log('Website running on port 3000.'));