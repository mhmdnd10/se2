"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_builder_1 = require("./builders/book.builder");
const cake_builder_1 = require("./builders/cake.builder");
const toy_builder_1 = require("./builders/toy.builder");
const Item_model_1 = require("./models/Item.model");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cakeBuilder = new cake_builder_1.CakeBuilder();
        const bookBuilder = new book_builder_1.BookBuilder();
        const toyBuilder = new toy_builder_1.ToyBuilder();
        const cake = cakeBuilder.setOrderId("12345").setCategory(Item_model_1.ItemCategory.BROWNIE).setPrice(10.99).setQuantity(2).build();
        const book = bookBuilder.setTitle("The Great Gatsby").setAuthor("F. Scott Fitzgerald").build();
        const toy = toyBuilder.setName("Teddy Bear").setBrand("Hasbro").build();
        console.log(cake);
        console.log(book);
        console.log(toy);
    });
}
main();
//# sourceMappingURL=index.js.map