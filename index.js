const express = require("express"); //include express in this app
const { request } = require("http");
const path = require("path"); //module to help with file paths

const app = express(); // create an express app
const port = process.env.PORT || "8888"; 


//Set up template engine
app.set("views", path.join(__dirname, "views")) //first "views" is the view of the app and second "views" is the directory name
app.set("view engine", "pug");
//set up app to use Pug as template engine

//set up a path for static files
app.use(express.static(path.join(__dirname, "public")));

//Set up soem page routes
app.get("/",(request,response) => {
 //   response.status(200).send("Test page"); //this is just to test
 response.render("index", {title: "Home"});
}
);
app.get("/about", (request, response) => {
    response.render("about", { title: About});
});

app.listen(port,() => {
    console.log(`Listening on http://localhost:${port}`);
});