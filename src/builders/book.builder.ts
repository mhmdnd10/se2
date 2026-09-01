import { Book } from "../models/Book.model";

export class BookBuilder {
    private title!: string;
    private author!: string;
    setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }
    setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }
    
    build(): Book {
        const requiredFields = ['title', 'author'];
        for (const field of requiredFields) {
            if (!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Book(this.title, this.author);
    }
}