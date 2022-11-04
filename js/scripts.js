//business logic for Order
function Order() {
  this.pizzas = {};
  this.customer = {};
  this.currentId = 0;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

//Business logic for Pizza
function Pizza (toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
  this.cost = 0;
  }
 

