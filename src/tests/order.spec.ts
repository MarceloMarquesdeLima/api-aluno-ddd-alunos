import OrderItem from "../Domain/entity/orderItem";
import Order from "../Domain/entity/order";

describe("Order unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("Should throw error when CustomerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("Should throw error when Item is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Item qtde must be than 0");
  });

  it("Should calculate total", () => {
    const item1 = new OrderItem("i1", "Item 1", 20, 2, "p1");
    const item2 = new OrderItem("i2", "Item 2", 30, 1, "p2");
    const order = new Order("o1", "c1", [item1, item2]);

    const total = order.total();
    expect(total).toBe(70);
  });

  it("Should throw error if the qte is less or equal zero", () => {
    expect(() => {
      const item1 = new OrderItem("i1", "Item 1", 20, 0, "p1");
      const order = new Order("o1", "c1", [item1]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
