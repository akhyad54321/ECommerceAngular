export class Product {
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    isActive: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;

    constructor(sku: string, name: string, description: string, unitPrice: number, imageUrl: string,
        isActive: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date) {
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.isActive = isActive;
        this.unitsInStock = unitsInStock;
        this.dateCreated = dateCreated;
        this.lastUpdated = dateCreated;
    }

}