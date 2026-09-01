"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToyBuilder = void 0;
const Toy_model_1 = require("../models/Toy.model");
class ToyBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    setBrand(brand) {
        this.brand = brand;
        return this;
    }
    build() {
        const requiredFields = ['name', 'brand'];
        for (const field of requiredFields) {
            if (!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Toy_model_1.Toy(this.name, this.brand);
    }
}
exports.ToyBuilder = ToyBuilder;
//# sourceMappingURL=toy.builder.js.map