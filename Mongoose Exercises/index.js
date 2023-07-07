import mongoose from 'mongoose'

async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/Book");
  }
  
  main().catch((err) => console.log(err));
  
  // Schema
  const bookSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "No title defined"],
      },
    Author: String,
    Page: Number
  });
  
  // Model
  const Book = new mongoose.model("Book", bookSchema);
  
  // creating a document
  const book = new Book({
    Title: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    Pages: 218
  });
  
  // absenden
  // book.save();

  // Schema 
  const carSchema = new mongoose.Schema({
    Make: {
        type: String,
        required: [true, "No make defined"]
    },
    Model: String,
    Year: Number
  });

  // Model
  const Car = new mongoose.model("Car", carSchema)

  // Create
  const car = new Car({
    Make: "Toyota",
    Model: "Camry" ,
    Year: 2022
  })

  // car.save()

  const updateBook = async () => {
    try {
      const res = await Book.updateOne(
        { Title: "The Great Gatsby" },
        { Author: "Ernest Hemingway" }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
 //  updateBook();

 const updateCar = async () => {
  try {
    const res = await Car.updateOne(
      { Make: "Toyota" },
      { Year: 2023 }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
//  updateCar();

// Schema
const autorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "No name defined"]
  },
  Age: Number,
  Books: Array
})

// Model
const Autor = new mongoose.model("Autor", autorSchema);

// Create
const autor = new Autor({
  Name: "J.K. Rowling",
  Age: 55,
  Books: [`64a47e0ee49990256e47e380 of books written by ${Autor.Name}`] // ???? name i alamadim
})

 // autor.save()

 // Schema
 const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Email: String,
  Favorites: []
 });

 // Model
 const User = new mongoose.model("User", userSchema);

 // creat
 const user = new User({
  Username: "johnDoe",
  Email: "johndoe@example.com",
  Favorites: {}
 });

 // user.save()

console.log(book)
console.log(autor.Name)
console.log(user.Username)