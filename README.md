Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return a Pizza object with 4 properties for toppings, size and quantity"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium", 2);
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", quantity: 2}

Describe: Order()

Test: "It should return an Order object with three properties for pizzas, customer and currentId"
Code: const newOrder = new Order();
Expected Output: Order { Pizzas: {}, customer: {}, currentId = 0 }

Describe: Order.assignId()

Test: "It should increment id by 1"
Code: order.assignId();
Expected Output: this.currentId = 1;


