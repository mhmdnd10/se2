import { Item, ItemCategory } from "./Item.model";
import { Order } from "./Order.model";

class Cake implements Item, Order {
    private orderId: string;
    private price: number
    private quantity: number;
    private category: ItemCategory;
    constructor(orderId: string, price: number, quantity: number, category: ItemCategory) {
        this.orderId = orderId;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
    getOrderId(): string {
        return this.orderId;
    }
    getPrice(): number {
        return this.price;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getCategory(): ItemCategory {
        return this.category;
    }
}