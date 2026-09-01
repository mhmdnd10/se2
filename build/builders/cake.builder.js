"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeBuilder = void 0;
const Cake_model_1 = require("../models/Cake.model");
class CakeBuilder {
    setOrderId(orderId) {
        this.orderId = orderId;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
        return this;
    }
    setCategory(category) {
        this.category = category;
        return this;
    }
    build() {
        const requiredFields = ['orderId', 'price', 'quantity', 'category'];
        for (const field of requiredFields) {
            if (!field) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
        return new Cake_model_1.Cake(this.orderId, this.price, this.quantity, this.category);
    }
}
exports.CakeBuilder = CakeBuilder;
//# sourceMappingURL=cake.builder.js.map