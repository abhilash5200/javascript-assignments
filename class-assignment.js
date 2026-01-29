//Problem Statement: Library Book Management System

//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
  //Create a Book class with the following:
     class Book{
      title;
      author;
      pages;
      isAvailable;
        borrow(){
        this.isAvailable=false;
      }
      returnBook(){
        this.isAvailable=true;
      }
      getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`;
      }
      isLongBook(){
        return this.pages>300;
      }
    }
  //Properties:
      //title (string)
      //author (string)
      //pages (number)
      //isAvailable (boolean, default: true)


 // Methods:
      //borrow() - Marks the book as not available
      //returnBook() - Marks the book as available
      //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      //isLongBook() - Returns true if pages > 300, false otherwise




  //1. Create at least 5 book objects using the class:
      //Example: "Harry Potter", "1984", "The Hobbit", etc.

    let book1=new Book();
    book1.title="Harry Potter";
    book1.author="J.K. Rowling";
    book1.pages=350;
    book1.isAvailable=true;
    let book2=new Book();
    book2.title="1984";
    book2.author="George Orwell";
    book2.pages=300;
    book2.isAvailable=true;
    let book3=new Book();
    book3.title="The Hobbit";
    book3.author="J.R.R. Tolkien";
    book3.pages=400;
    book3.isAvailable=true;
    let book4=new Book();
    book4.title="To Kill a Mockingbird";
    book4.author="Harper Lee";
    book4.pages=280;
    book4.isAvailable=true;
    let book5=new Book();
    book5.title="The Great Gatsby";
    book5.author="F. Scott Fitzgerald";
    book5.pages=180;
    book5.isAvailable=true;




  //2. Perform the following operations:

      //i. Display info of all books
        console.log(book1.getInfo());
        console.log(book2.getInfo());
        console.log(book3.getInfo());
        console.log(book4.getInfo());
        console.log(book5.getInfo());
    
      //ii. Borrow 2 books and show their availability status
      book1.borrow();
      book2.borrow();
      console.log("Book 1 is available:", book1.isAvailable);
      console.log("Book 2 is available:", book2.isAvailable);

      //iii. Return 1 book and show updated status
      book1.returnBook();
      console.log("Book 1 is available:", book1.isAvailable);

      //iv. Count how many books are "long books" (more than 300 pages)
        let books=[book1,book2,book3,book4,book5];
        let longBooks=books.filter(book=>book.isLongBook());
        console.log("Number of long books:",longBooks.length);

      //v. List all available books
        let availableBooks=books.filter(book=>book.isAvailable);
        console.log("Available books:");
        availableBooks.forEach(book=>console.log(book.getInfo()));
