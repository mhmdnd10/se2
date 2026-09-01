"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cake = void 0;
class Cake {
    constructor(orderId, price, quantity, category) {
        this.orderId = orderId;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
    getOrderId() {
        return this.orderId;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
    getCategory() {
        return this.category;
    }
}
exports.Cake = Cake;
//# sourceMappingURL=Cake.model.js.map