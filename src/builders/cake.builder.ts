import { Cake } from "../models/Cake.model";
import { ItemCategory } from "../models/Item.model";
export class CakeBuilder {
    private orderId!: string;
    private price!: number
    private quantity!: number;
    private category!: ItemCategory;
    setOrderId(orderId:string):CakeBuilder{
        this.orderId=orderId;
        return this;
    }
    setPrice(price:number):CakeBuilder{
        this.price=price;
        return this;
    }
    setQuantity(quantity:number):CakeBuilder{
        this.quantity=quantity;
        return this;
    }
    setCategory(category:ItemCategory):CakeBuilder{
        this.category=category;
        return this;
    }
    build():Cake{
        const requiredFields = ['orderId', 'price', 'quantity', 'category'];
        for (const field of requiredFields) {
            if(!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Cake(this.orderId, this.price, this.quantity, this.category);
    }
}