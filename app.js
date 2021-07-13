const express = require("express");
const app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var User = require("./models/user");
var localStrategy = require("passport-local");
//importing the middleware object to use its functions
var middleware = require("./middleware"); //no need of writing index.js as directory always calls index.js by default
var port = process.env.PORT || 3000;

app.use(express.static("public"));

/*  CONFIGURE WITH PASSPORT */
app.use(
  require("express-session")({
    secret: "decryptionkey", //This is the secret used to sign the session ID cookie.
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize()); //middleware that initialises Passport.
app.use(passport.session());
passport.use(new localStrategy(User.authenticate())); //used to authenticate User model with passport
passport.serializeUser(User.serializeUser()); //used to serialize the user for the session
passport.deserializeUser(User.deserializeUser()); // used to deserialize the user

app.use(express.urlencoded({ extended: true })); //parses incoming url encoded data from forms to json objects
app.set("view engine", "ejs");

//THIS MIDDLEWARE ALLOWS US TO ACCESS THE LOGGED IN USER AS currentUser in all views
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

/* CONNECT MONGOOSE WITH OUR MONGO DB  */

app.get("/", (req, res) => {
  res.render("index", { title: "Library" });
});

app.get("/books", (req, res) => {
  //access all books from the book model and render book list page
  res.render("book_list", { books: [], title: "Books | Library" });
});

app.get("/book/:id", (req, res) => {
  //access the book with this id and render book detail page
});

app.get(
  "/books/loaned",
  //call a function from middleware object to check if logged in (use the middleware object imported)
  (req, res) => {
    //access the books loaned for this user and render loaned books page
  }
);

app.post(
  "/books/issue",
  //call a function from middleware object to check if logged in (use the middleware object imported)
  (req, res) => {
    // Extract necessary book details from request
    // return with appropriate status
    // Optionally redirect to page or display on same
  }
);

app.post("/books/search-book", (req, res) => {
  // extract search details
  // query book model on these details
  // render page with the above details
});

/* WRITE VIEW TO RETURN AN ISSUED BOOK YOURSELF */

//AUTH ROUTES
app.get("/login", (req, res) => {
  //render login page
});

app.post("/login", (req, res) => {
  //authenticate using passport
  //On successful authentication, redirect to next page
});

app.get("/register", (req, res) => {
  //render register page
});

app.post("/register", (req, res) => {
  //Register user to User db using passport
  //On successful authentication, redirect to next page
});

app.get("/logout", (req, res) => {
  //write code to logout user and redirect back to the page
});
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
