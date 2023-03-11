import OrderItem from "../Domain/entity/orderItem";
describe("Order Items unit tests", () => {

  it("Should throw error when id is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("", "Product 1", 100, 2, "p1");
    }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("123", "", 100, 2, "p1");
    }).toThrowError("Name is required");
  });

  it("Should throw error when price is less than zero", () => {
    expect(() => {
      let orderItem = new OrderItem("123", "Product 1", -1, 2, "p1");
    }).toThrowError("Price must be greater than zero");
  });
});