import { Item, ItemCategory } from "./Item.model";

class Toy implements Item {
    private name: string;
    private brand: string;
    constructor(name: string, brand: string) {
        this.name = name;
        this.brand = brand;
    }

    getName(): string {
        return this.name;
    }

    getBrand(): string {
        return this.brand;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }
}