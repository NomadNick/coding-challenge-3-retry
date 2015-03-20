function Library(name) {
	this.name = name;
	this.shelves = [];
	this.addShelf = function(name) {
		this.shelves.push(name);
	};
	this.removeShelf = function(name) {
		var i = this.shelves.indexOf(name);
		if (i != -1) {
			this.shelves.splice(i, 1);
		}
	};
}

function Shelf(name) {
	this.name = name;
	this.books = [];
	this.addBook = function(name) {
		this.books.push(name);
	};
	this.removeBook = function(name) {
		var i = this.books.indexOf(name);
		if (i != -1) {
			this.shelves.splice(i, 1);
		}
	};
}

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