Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["lemon", "ginger", "coleslaw"], "medium");
Expected Output: Pizza { toppings: ["lemon", "ginger", "coleslaw"], size: "medium" }

Test: "It should return a Pizza object with 4 properties for toppings, size and quantity"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium", 2);
Expected Output: Pizza { toppings: ["lemon", "ginger", "coleslaw"], size: "medium", quantity: 2}


Describe: Order()

Test: "It should return an Order object with three properties for pizzas, customer and currentId"
Code: const newOrder = new Order();
Expected Output: Order { Pizzas: {}, customer: {}, currentId = 0 }


Describe: Order.prototype.assignId()

Test: "It should increment id by 1"
Code: newOrder.assignId();
Expected Output: this.currentId = 1;


Describe: Order.prototype.addPizza()

Test: "It should nest pizza object inside Order object and assign Id"
Code: newOrder.addPizza(myPizza);
Expected Output: pizzas: {1: Pizza {toppings: ["lemon", "ginger", "coleslaw"], size: "medium", quantity: 2, cost: 0, id: 1} }


Describe: Order.prototype.findPizza(id)

Test: "It should find a pizza object by id"
Code: newOrder.findPizza(1)
Expected Output: Pizza {toppings: Array(3), size: 'medium', quantity: 2, cost: 29, id: 1}


Describe: Order.prototype.deletePizza(id)

Test: "It should delete pizza object from inside Order object"
Code: newOrder.deletePizza(1);
Expected Output: {pizzas: {}, ...}


Describe: Pizza.prototype.calculateCost()

Test: "It should calculate cost of pizza based on topping quantity and size"
Code: myPizza.calculateCost();
Expected Output: Pizza {toppings: Array(3), size: 'medium', quantity: 1, cost: 29, id: 1}

Test: "It should calculate cost of pizza based on amount of toppings, size and pizza quantity"
Code: myPizza.calculateCost();
Expected Output: Pizza {toppings: Array(3), size: 'medium', quantity: 2, cost: 58, id: 1}


Describe: Customer()
Test: "It should return a Customer object with firstName, lastName, email and address properties"
Code: const newCustomer = new Customer('John', 'Lennon', 'john.lennon@beatles.com', '123 beatle lane Beatler, BT 90210');
Expected Output: Customer { firstName: 'John', lastName: 'Lennon',email: 'john.lennon@beatles.com', address: '123 beatle lane Beatler, BT 90210' }

Describe: Order.prototype.addCustomer()

Test: "It should nest customer object inside Order object"
Code: newOrder.addCustomer(newCustomer);
Expected Output: newOrder { ..., Customer { firstName: 'John', lastName: 'Lennon',email: 'john.lennon@beatles.com', address: '123 beatle lane Beatler, BT 90210' }, ... }
