import Order from "../Domain/entity/order";
import OrderItem from "../Domain/entity/orderItem";
import OrderService from "../Domain/service/order.service";

describe("Order service uniit tets", () => {
    it("Should get total of all orders", () => {
        const item1 = new OrderItem("123", "Item 1", 100, 1, "p1");
        const item2 = new OrderItem("124", "Item 2", 200, 2, "p2");

        const order1 = new Order("o1", "c1", [item1]);
        const order2 = new Order("o2", "c1", [item2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500);
    });
});