function Order() {
  this.pizzas = {};
  this.customer = {};
  this.currentId = 0;
}

function Pizza (toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
  this.cost = 0;
  }
  

