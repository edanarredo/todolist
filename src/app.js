// including modules
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const defaultItems = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("../public"));

// Home page get-reqest
app.get("/", (req, res) => {

   const day = date.getDate();
   res.render('list', { listTitle: day, newListItems: defaultItems });

});

// Home page post-request
app.post("/", (req, res) => {

   const newItem = req.body.newItem;

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