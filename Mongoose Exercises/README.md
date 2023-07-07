# mongose-exercise
## Exercise 1:

Create a new Mongoose model called "Book" with the following schema:

    Title: String (required)
    Author: String
    Pages: Number

## Exercise 2:

Create a new instance of the "Book" model and save it to the database. Set the following properties:

    Title: "The Great Gatsby"
    Author: "F. Scott Fitzgerald"
    Pages: 218

## Exercise 3:

Write a Mongoose schema for a collection called "Car" with the following properties:

    Make: String (required)
    Model: String
    Year: Number

## Exercise 4:

Create a new instance of the "Car" model and save it to the database. Set the following properties:

    Make: "Toyota"
    Model: "Camry"
    Year: 2022

## Exercise 5:

Update the book with the title "The Great Gatsby" and change the author to "Ernest Hemingway".

## Exercise 6:

Update the car with the make "Toyota" and change the year to 2023.

## Exercise 7:

Create a new Mongoose model called "Author" with the following schema:

    Name: String (required)
    Age: Number
    Books: Array of ObjectId references to the "Book" model

## Exercise 8:

Create a new instance of the "Author" model and save it to the database. Set the following properties:

    Name: "J.K. Rowling"
    Age: 55
    Books: [ObjectId(s) of books written by J.K. Rowling]

## Exercise 9:

Write a Mongoose schema for a collection called "User" with the following properties:

    Username: String (required)
    Email: String
    Favorites: Array of ObjectId references to the "Book" model

## Exercise 10:

Create a new instance of the "User" model and save it to the database. Set the following properties:

    Username: "johnDoe"
    Email: "johndoe@example.com"
    Favorites: [ObjectId(s) of books favorited by John Doe]

## Exercise 11:

Retrieve all books from the "Book" collection and log them to the console.

## Exercise 12:

Retrieve an author from the "Author" collection based on their name and log their details, including the books they have written, to the console.

## Exercise 13:

Retrieve a user from the "User" collection based on their username and log their details, including their favorite books, to the console.

## Exercise 14:

Add a new book to the "Favorites" array of a specific user. Retrieve the user by their username and update their favorites to include a new book.
