const cars = require("./data/cars");

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car);
    this.total += car.price;
    return this.cart;
  },

  removeFromCart: function(index, price) {
    if (this.cart.length) {
      this.cart.splice(index, 1);
      this.total -= price;
    } else {
      return "Cart array is empty";
    }
    return this.cart;
  },

  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};
