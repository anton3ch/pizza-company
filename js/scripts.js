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

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false;
};

Order.prototype.deletePizza = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};



//Business logic for Pizza
function Pizza (toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
  this.cost = 0;
  }
 
Pizza.prototype.calculateCost = function() {
  const toppingsQuantity = this.toppings.length;
  this.cost = 0;
  for(let i = 1; i <= this.quantity; i++){
    this.cost += toppingsQuantity * 3;
  
    switch(this.size) {
      case ("small"):
        this.cost += 10;
        break;
      case ("medium"):
        this.cost += 20;
        break;
      case ("large"):
        this.cost += 50;
        break;
    }
  }
};

//Business logic for Customer

function Customer(firstName, lastName, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.address = address;
}
  

// UI logic
let Order = new Order();
let newPizza = new Pizza(['lemon', 'ginger', 'coleslaw'], 'medium', 2);
let Order = new Order();
newPizza.calculateCost();
