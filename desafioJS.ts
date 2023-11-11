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

    addBook(bookInfo: Omit<Book, 'id'>){
        const newBook = new Book(
            this.generateBookID(),
            bookInfo.title,
            bookInfo.description,
            bookInfo.author,
        );
        return bookInfo
    }

    generateBookID(){
        const random = (num: any) => Math.floor(Math.random() * num);
        return random(100000).toString()
    }

    removeBookByID(id: string): void{
        const index = this.books.findIndex(book => book.id === id);

        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getBooks(): Book[]{
        return this.books
    }

    getBookById(id: string): Book | undefined{
        return this.books.find(book => book.id === id)
    }

    updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book | undefined{
        const bookToUpdate = this.getBookById(id);

        if (bookToUpdate){

            if (info.title){
                bookToUpdate.title = info.title;
            }
            if (info.description){
                bookToUpdate.description = info.description;
            }
            if (info.author){
                bookToUpdate.author = info.author;
            }
            
            return bookToUpdate;
        }

    }

}

const library = new Library();

const addedBook = library.addBook({
    title: "Example Title",
    description: "Example Description",
    author: "Example Author"
});

