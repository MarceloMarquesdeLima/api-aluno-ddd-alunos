import OrderItem from './Domain/aggregate/order_item';
import Customer from './Domain/entity/customer';
import Order from './Domain/entity/order';
import Address from './Domain/valueObjects/address';

let customer = new Customer("1234", "Marcelo Marques");
const address = new Address("Rua Chile", 59, "86181-190", "Cambé", "Paraná");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("1", "123", [item1, item2]);