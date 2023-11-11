class Book {

    id: string;
    title: string;
    description: string;
    author: string;

    constructor (id: string, title: string, description: string, author: string){
        this.id = id
        this.title = title
        this.description = description
        this.author = author
    }
}       

class Library {

    books: Book[];

    constructor(){
        this.books = [];
    }

    function addBook(bookInfo: Omit<Book, 'id'>){
        const newBook = new Book(
            this.generateBookID(),
            bookInfo.title,
            bookInfo.description,
            bookInfo.author,
        );
        return bookInfo
    }

    function generateBookID(){
        const random = (num: any) => Math.floor(Math.random() * num);
        return random(100000)
    }
}

//const newBook = new Book(); 