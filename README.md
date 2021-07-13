# Library - CSoC Dev Task 4 (Express)

## Introduction

Welcome to the Week 4 of CSOC Dev. In this assignment, you will be working on the Express backend of a library web application. A boilerplate has already been created for you and all that remains is to fill in the code wherever we've asked you to, or wherever you feel required.

A very basic frontend has already been created for visualizing the results. You need not mess with it until the later stages of the assignment. Also there are no extra points for UI, as main aim of the task is to learn about working with express.

### Setting up the project

- Fork and clone this repo.
- Go to project folder in terminal and run `npm install`, to install all dependencies.
- Start the development server using `npm run dev`.
- Server should automatically reload and reflect your changes upon saving, if that doesn't happen quit the server using `ctrl+c` and restart development server.

### Working
* There will be several books present in the Library, which can be added or removed only from the database directly (Book model).
* Every book will have several instances. Again, this can be added or removed only from the database directly. Note that each instance denotes a physical copy of the book (BookCopy model).
* As an example, if a book B1 has 5 copies, then there shall be 5 BookCopy instances corresponding to the book B1.
* While borrowing a book, a logged in user can borrow any instance of the BookCopy model whose status is available. A user is allowed to borrow multiple copies of the same book. After successfully borrowing a copy, the number of copies of the book available in the library will decrease. That is, if the user borrows the book B1, then the number of instances of book B1 will become 4. The instance won't get deleted on borrowing as it represents a physical copy of the book.
* A user can return a copy of the book, and thereby, the number of copies of the book available will increase by 1, for each book copy returned.
* The library system would also allow the user to rate a particular book, which will be used to calculate the average rating of the book. The ratings will be given to a book, and not to the copy of a book. Also, a user can rate a book multiple times, and in that case, only the last rating given by the user to the book will persist.

## Tasks
#### Stage 1 (50 Points)
Complete the following controllers without altering the frontend. Necessary details have been mentioned as comments in the controllers themselves. Only a logged in user can view the loaned books or issue a book.

* `getAllBooks`
* `getBook`
* `searchBooks`
* `getLoanedBooks`
* `issueBook`

#### Stage 2 (30 Points)
Complete the controller and route for returning an issued book. You need to write this route all by yourself.

* Your route will accept Book Copy ID as an argument and mark the appropriate Book Copy as returned and return an appropriate response.
* You will have to add route in app.js and call the respective controller which you will define in `controller/store.js`.

#### Stage 3 (100 Points)
In this stage, you will need to implement a rating system all by yourself. This stage contains highest point in this tasks.

* You may need to fiddle around with the models, even create some new models, controllers and make changes to the existing templates.
* Your system should allow the user to enter any **integer** between 0 to 10 (both inclusive) and the final rating would be the average of all the user ratings given to the book and should be a **real number**.
* The ratings would be given to a Book issued by a user, and not a Book Copy.
* The ratings must be modifiable. Also, if a user has rated a book multiple times, then only the last rating given by the user should matter, any previous ratings should not contribute to the average rating of the book.
* As an example, if there are two users U1 and U2, and they have rated a book as 8 and 10, respectively, then the average rating would be 9.0. If the user U1 later changes the rating to 9, then the average rating of the book should become 9.5.
* Only a logged in user should be allowed to rate a book, but others may view the average rating of the book.
* You can add an integer field with a submit button in the Book Detail template or the Book List template itself.

#### Stage 4 (60 Points)
In the `controllers/store.js`, fill in the controllers for login, logout and user registration. You will also need to create basic frontend view for these in `views/`. Refer to the existing ejs templates if you have any issue.

## Deadline
You'll have a week to complete this task. Hence, the deadline of this task is 22nd July, 2021.
