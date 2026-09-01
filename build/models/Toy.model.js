"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toy = void 0;
const Item_model_1 = require("./Item.model");
class Toy {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    getName() {
        return this.name;
    }
    getBrand() {
        return this.brand;
    }
    getCategory() {
        return Item_model_1.ItemCategory.TOY;
    }
}
exports.Toy = Toy;
//# sourceMappingURL=Toy.model.js.map