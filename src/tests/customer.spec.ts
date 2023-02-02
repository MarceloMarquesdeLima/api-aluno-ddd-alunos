import Customer from "../Domain/entity/customer";
import Address from "../Domain/valueObjects/address";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Jhon");
        }).toThrowError("Id is required");
     });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });
    
    it("should change name", () => {
        const customer = new Customer("123", "Jhon");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "Jhon");
        const address = new Address("Rua Teste", 171, "17117-171", "Rio de Janeiro", "RJ");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("123", "Jhon");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });

    it("should desactivate customer", () => {
        const customer = new Customer("123", "Jhon");
        customer.desactivate();
        expect(customer.isActive()).toBe(false);
    });
    
});