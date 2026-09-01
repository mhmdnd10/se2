export interface Order {
    getOrderId(): string;
    getPrice(): number;
    getQuantity(): number;
}