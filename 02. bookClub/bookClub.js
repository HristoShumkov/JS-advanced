class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = []
    }

    addBook(title, author) {
        let newBook = {
            title,
            author
        }


        if (this.books.filter(x => x.title === newBook.title && x.author === newBook.author).length) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }

        else {
            this.books.push(newBook);
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(name) {
        if (this.members.includes(name)) {
            return `Member ${name} is already a part of the book club.`;
        } else {
            this.members.push(name);
            return `Member ${name} has been joined to the book club.`;
        }
    }

    assignBookToMember(name, title) {
        let bookIdx = this.books.findIndex(x => x.title === title);

        if (!this.members.includes(name)) {
            throw new Error(`Member ${name} not found.`);
        } else if (bookIdx === -1) {
            throw new Error(`Book "${title}" not found.`);
        } else {
            let assignedBook = this.books.splice(bookIdx, 1)[0];
            return `Member ${name} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
        }
    }

    generateReadingReport() {
        if (!this.members.length) {
            return "No members in the book club.";
        } else if (!this.books.length) {
            return "No available books in the library.";
        } else {
            let buff = `Available Books in ${this.library} library:`;
            for (let book of this.books) {
                buff += `\n"${book.title}" by ${book.author}`
            }
            return buff
        }
    }
}
