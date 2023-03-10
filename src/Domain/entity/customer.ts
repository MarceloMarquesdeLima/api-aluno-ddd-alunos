import Address from "../valueObjects/address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate(){
        if(this._id.length === 0){
            throw new Error("Id is required");
        }
        if(this._name.length === 0){
            throw new Error("Name is required");
        }
        if(this._address === null){
            throw new Error("Address is required");
        }
    }

    get name(): string {
        return this._name;
    }

    isActive(): boolean {
        return this._active;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate(){
        if(this._address === undefined){
            throw new Error("Address is mandatory to activate a customer.")
        }
        this._active = true;
    }

    desactivate() {
        this._active = false;
    }

    set Address(address: Address){
        this._address = address;
    }
}