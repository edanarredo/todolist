// including modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let defaultItems = [];
let workItems = [];

// Configuration
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("../public"));

// Home page get-reqest
app.get("/", (req, res) => {

   const today = new Date();
   fullDateConfig = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   };

   const date = today.toLocaleDateString("en-US", fullDateConfig);
   res.render('list', { listTitle: date, newListItems: defaultItems });

});

// Home page post-request
app.post("/", (req, res) => {

   let newItem = req.body.newItem;
   console.log(req.body.list);
   // check if newItem was submitted into home or work list
   if (req.body.list === "Work") {
      workItems.push(newItem);
      res.redirect("/work");
   }
   else {
      defaultItems.push(newItem);
      res.redirect("/");
   }
});

// Work page get-request
app.get("/work", (req, res) => {

   res.render("list", { listTitle: "Work List", newListItems: workItems });

});

app.get("/about", (req, res) => {

   res.render("about");
});

app.listen(3000, () => console.log('Website running on port 3000.'));