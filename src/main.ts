import OrderItem from './Domain/entity/orderItem';
import Customer from './Domain/entity/customer';
import Order from './Domain/entity/order';
import Address from './Domain/valueObjects/address';

let customer = new Customer("1234", "Marcelo Marques");
const address = new Address("Rua Chile", 59, "86181-190", "Cambé", "Paraná");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("i1", "Item 1", 20, 2, "p1");
const item2 = new OrderItem("i2", "Item 2", 30, 1, "p2");

const order = new Order("1", "123", [item1, item2]);