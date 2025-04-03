class Book {
    #title;
    #author;
    #price;
    #image;

    constructor(title, author, price, image) {
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#image = image;
    }

    getTitle() { return this.#title; }
    getAuthor() { return this.#author; }
    getPrice() { return this.#price; }
    getImage() { return this.#image; }

    setTitle(newTitle) { this.#title = newTitle; }
    setAuthor(newAuthor) { this.#author = newAuthor; }
    setPrice(newPrice) {
        if (newPrice < 0) { 
            alert("Invalid price");
        }
        else {
            this.#price = newPrice;
        }
    }
    setImage(newImagePath) {
        if (!(newImagePath.includes("images/"))){
            alert("Invalid path");
        }
        else {
            this.#image = newImagePath;
        }
    }

    toString() {
        return `{"title": ${this.#title}, "author": ${this.#author}, "price": ${this.#price}, "image": ${this.#image}}`;
    }

    toMedia() { // <span> <h2>Title</h2> <img src="images/bookx.png"> <h3>Price: price</h3> </span>
        let bookHTML = document.createElement('span');
        bookHTML.innerHTML = (`<h2>${this.#title}</h2> <img src="${this.#image}"> <h3>Written by: ${this.#author}</h3> <h3>Price: $${this.#price}</h3><br>`)
        return bookHTML;
    }
}



let books = [{"title": "Frakenstein", "author": "Mary Shelley", "price": 15.99, "image": "images/book1.png"}, 
             {"title": "Eragon", "author": "Christopher Paolini", "price": 15.99, "image": "images/book2.png"}, 
             {"title": "Killing Floor", "author": "Lee Child", "price": 11.99, "image": "images/book3.png"}];

let mediaBook = new Book();
for(let book of books){
    JSON.stringify(book);
    
    mediaBook = new Book(book.title, book.author, book.price, book.image);
    document.getElementById('bookArea').appendChild(mediaBook.toMedia());
}