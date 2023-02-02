import OrderItem from "../aggregate/order_item";

export default class Order {

    private _id: string;
    private _CustomerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]){
        this._id = id;
        this._CustomerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();

    }

    validate(): boolean {
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
        if(this._CustomerId.length === 0){
            throw new Error("CustomerId is required");
        }
        if(this._items.length === 0){
            throw new Error("Item qtde must be than 0");
        }
        return true;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}