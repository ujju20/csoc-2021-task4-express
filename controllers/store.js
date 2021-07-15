const bookModel=require('../models/book');

var getAllBooks = (req, res) => {
    //TODO: access all books from the book model and render book list page
    res.render("book_list", { books:[{id:1,title:"Ujjawal",genre:"horror",author:"Ujju",rating:5,mrp:2000}] ,title: "Books | Library" ,currentUser:"hi"});
}

var getBook = (req, res) => {
    //TODO: access the book with a given id and render book detail page
    res.render("book_detail",{book:{id:1,title:"Ujjawal",genre:"horror",author:"Ujju",rating:5,mrp:2000},num_available:6,title:"Books | Library",currentUser:"hi"});
}

var getLoanedBooks = (req, res) => {

    //TODO: access the books loaned for this user and render loaned books page
    res.render("loaned_books",{books:[],title: "Books | Library"})
}

var issueBook = (req, res) => {
    
    // TODO: Extract necessary book details from request
    // return with appropriate status
    // Optionally redirect to page or display on same
    //console.log(req);
    res.render("book_list",{ books:[{id:1,title:"Ujjawal",genre:"horror",author:"Ujju",rating:5,mrp:2000}] ,title: "Books | Library" ,currentUser:"hi"});
}

var searchBooks = (req, res) => {
    // TODO: extract search details
    // query book model on these details
    // render page with the above details
    //console.log(req.body);
    res.render("book_list",{books:[req.body],title: "Books | Library",currentUser:"hi"});
}

module.exports = {
    getAllBooks,
    getBook,
    getLoanedBooks,
    issueBook,
    searchBooks
}