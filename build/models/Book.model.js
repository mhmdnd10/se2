"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Item_model_1 = require("./Item.model");
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getCategory() {
        return Item_model_1.ItemCategory.BOOK;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.model.js.map