function Library(name) {
	//takes name parameter and uses it to set the name of the instance of Library
	this.name = name;
	//an empty array is added for the shelves to be pushed to
	this.shelves = [];
	//method to add shelves using the name of the shelf as the parameter and going to the shelves array
	this.addShelf = function(name) {
		this.shelves.push(name);
	};
	//method to remove the shelves by finding the name of the shelf and assigning it to 'i'
	this.removeShelf = function(name) {
		var i = this.shelves.indexOf(name);
		//'var i' will find the index of the named shelf, but return -1 if it is not found. Therefore, we need to check to make sure it does not equal -1 first, then splice (remove) 'i' from the array and return a new array with that shelf index removed
		if (i != -1) {
			this.shelves.splice(i, 1);
		}
	};
}

function Shelf(name) {
	//takes name parameter and uses it to set the name of the instance of Shelf
	this.name = name;
	//an empty array is added for the books to be pushed to
	this.books = [];
	//method to add books using the name of the book as the parameter and going to the books array
	this.addBook = function(name) {
		this.books.push(name);
	};
	//method to remove the shelves by finding the name of the shelf and assigning it to 'i'
	this.removeBook = function(name) {
		var i = this.books.indexOf(name);
		//'var i' will find the index of the named book, but return -1 if it is not found. Therefore, we need to check to make sure it does not equal -1 first, then splice (remove) 'i' from the array and return a new array with that book index removed
		if (i != -1) {
			this.books.splice(i, 1);
		}
	};
}

//constructor notation to allow for easily adding multiple objects
function Book(bookTitle, authorFirstName, authorLastName) {
	this.bookTitle = bookTitle;
	this.authorFirstName = authorFirstName;
	this.authorLastName = authorLastName;
}

var portlandPublic = new Library('Portland Public Library');

var bestSellers = new Shelf('Best Sellers');
var programmingBooks = new Shelf('Programming');

var unbroken = new Book('Unbroken', 'Laura', 'Hillenbrand');
var wild = new Book('Wild', 'Cheryl', 'Strayed');

var eloquentJS = new Book('Eloquent JavaScript', 'Marijn', 'Haverbeke');
var jsGoodParts = new Book('JavaScript: The Good Parts', 'Douglas', 'Crockford');

portlandPublic.addShelf(bestSellers);
portlandPublic.addShelf(programmingBooks);

bestSellers.addBook(unbroken);
bestSellers.addBook(wild);

programmingBooks.addBook(eloquentJS);
programmingBooks.addBook(jsGoodParts);