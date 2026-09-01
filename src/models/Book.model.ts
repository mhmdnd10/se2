import { Item, ItemCategory } from "./Item.model";

export class Book implements Item {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getCategory(): ItemCategory {
        return ItemCategory.BOOK;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
}