"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookBuilder = void 0;
const Book_model_1 = require("../models/Book.model");
class BookBuilder {
    setTitle(title) {
        this.title = title;
        return this;
    }
    setAuthor(author) {
        this.author = author;
        return this;
    }
    build() {
        const requiredFields = ['title', 'author'];
        for (const field of requiredFields) {
            if (!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Book_model_1.Book(this.title, this.author);
    }
}
exports.BookBuilder = BookBuilder;
//# sourceMappingURL=book.builder.js.map