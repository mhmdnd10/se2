import { Toy } from "../models/Toy.model";

export class ToyBuilder {
    private name!: string;
    private brand!: string;
    setName(name: string): ToyBuilder {
        this.name = name;
        return this;
    }
    setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }
    build(): Toy {
        const requiredFields = ['name', 'brand'];
        for (const field of requiredFields) {
            if (!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Toy(this.name, this.brand);
    }
}