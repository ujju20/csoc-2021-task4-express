var getAllBooks = (req, res) => {
    //access all books from the book model and render book list page
    res.render("book_list", { books: [], title: "Books | Library" });
}

var getBook = (req, res) => {
    //access the book with a given id and render book detail page
}

var getLoanedBooks = (req, res) => {
    //call a function from middleware object to check if logged in (use the middleware object imported)
    //access the books loaned for this user and render loaned books page
}

var issueBook = (req, res) => {
    //call a function from middleware object to check if logged in (use the middleware object imported)
    // Extract necessary book details from request
    // return with appropriate status
    // Optionally redirect to page or display on same
}

var searchBooks = (req, res) => {
    // extract search details
    // query book model on these details
    // render page with the above details
}

module.exports = {
    getAllBooks,
    getBook,
    getLoanedBooks,
    issueBook,
    searchBooks
}