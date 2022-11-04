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

Order.prototype.addCustomer = function(customer) {
  this.customer = customer;
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
let newOrder = new Order();
// newPizza.calculateCost();

function customizePizza() {
  const firstName = document.querySelector("input#first-name").value;
  const lastName = document.querySelector("input#last-name").value;
  const email = document.querySelector("input#email").value;
  const address = document.querySelector("input#address").value;
  let newCustomer = new Customer(firstName, lastName, email, address);
  newOrder.addCustomer(newCustomer);
  document.getElementById("customer-info").setAttribute("class", "hidden");
  document.getElementById("pizza-selection").removeAttribute("class");
}


document.getElementById("pick-up").addEventListener("click", function(){
  document.getElementById("customer-info").removeAttribute("class");
  document.getElementById("delivery-option").setAttribute("class", "hidden");
});

document.getElementById("delivery").addEventListener("click", function(){
  document.getElementById("customer-info").removeAttribute("class");
  document.getElementById("delivery-address").removeAttribute("class");
  document.getElementById("delivery-option").setAttribute("class", "hidden");

});

document.getElementById("pizza-next").addEventListener("click", customizePizza);

document.getElementById("custom-choice").addEventListener("click", function(event){
  let elementId = event.target.getAttribute("id");
  let element = document.getElementById(`${elementId}`);
  if(element.hasAttribute("class")){
    element.removeAttribute("class")
  } else {
    element.setAttribute("class", "gray-img")
  }
})

$(document).ready(function() {
  $('input[name="pizza-kind"]').click(function() {
      var inputValue = $(this).attr("value");
      var targetBox = $("#" + inputValue + "-choice");
      $(".selectt").not(targetBox).hide();
      $(targetBox).show();
  });
});