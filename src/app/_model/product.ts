export class Product {
    id: number;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    isActive: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdated: Date;

    constructor(id: number, sku: string, name: string, description: string, unitPrice: number, imageUrl: string,
        isActive: boolean, unitsInStock: number, dateCreated: Date, lastUpdated: Date) {
            this.id = id;
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