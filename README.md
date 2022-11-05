# Pizza company

#### By Anton Ch

#### Website for a pizza company

## Technologies Used

* CSS
* HTML
* JavaScript
* Jquery
* Bootstrap


## Description

Web-page for pizza company where a user can choose a pizza size and one or more individual toppings. Then the total cost is calculated based on the user selection.



## Setup/Installation Requirements

* Click on or copy and paste this [GitHub Page](https://anton3ch.github.io/pizza-company/) into your preferred browser:<br>https://anton3ch.github.io/pizza-company/

  ***OR***

* Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your browser:
      ```
      $ cd ~/Desktop
      $ git clone https://anton3ch.github.io/pizza-company/
      ```
  3. Open index.html by typing following command: 
      ```
      $ open ~/Desktop/pizza-company/index.html
      ```
      ***OR***

      Open "pizza-company" folder on your desktop and open "index.html" file in your browser.


## Specifications
<details markdown=block>
<summary markdown=span>TDD Test-Blocks (Business Logic)</summary>
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
</details> 
 
## Known Bugs

* checkboxes can be checked even if user clicks outside of the image 

## License

MIT

Copyright (c) 10/28/2022 Anton Ch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.