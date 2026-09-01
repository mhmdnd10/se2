export interface Item{
    getCategory():ItemCategory;
}
export enum ItemCategory{
    BROWNIE,
    BOOK,
    TOY,
}