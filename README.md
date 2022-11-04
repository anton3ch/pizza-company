Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return a Pizza object with 4 properties for toppings, size, quantity and cost"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium", 2, 0);
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium", quantity: 2, cost: 0 }