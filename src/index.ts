import { BookBuilder } from "./builders/book.builder";
import { CakeBuilder } from "./builders/cake.builder";
import { ToyBuilder } from "./builders/toy.builder";
import { ItemCategory } from "./models/Item.model";

async function main(){
    const cakeBuilder= new CakeBuilder();
    const bookBuilder= new BookBuilder();
    const toyBuilder= new ToyBuilder();
    const cake=cakeBuilder.setOrderId("12345").setCategory(ItemCategory.BROWNIE).setPrice(10.99).setQuantity(2).build();
    const book=bookBuilder.setTitle("The Great Gatsby").setAuthor("F. Scott Fitzgerald").build();
    const toy=toyBuilder.setName("Teddy Bear").setBrand("Hasbro").build();
    console.log(cake);
    console.log(book);
    console.log(toy);
}
main()