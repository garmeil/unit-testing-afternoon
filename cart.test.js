const cart = require("./cart");
const cars = require("./data/cars");

describe("Cart Properties:", function() {
  test("Expected cart to be an empty Array", () => {
    expect(Array.isArray(cart.cart)).toEqual(true);
  });
  test("Expected total to equal 0", () => {
    expect(cart.total).toEqual(0);
  });
});
describe("Cart Methods:", function() {
  afterEach(function() {
    cart.cart = [];
    cart.total = 0;
  });
  test("addToCart() should add a car object to the cart array", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[1]);
  });
  test("addToCart() should increase the total property", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    expect(cart.total).toEqual(cars[0].price + cars[1].price);
  });
  test("removeFromCart() should remove a car from the cart array", function() {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(1, cars[1].price);
    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[2]);
  });
  test("removeFromCart() should decrease the total property", function() {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(1, cars[1].price);
    expect(cart.total).toEqual(cars[0].price + cars[2].price);
  });
  test("removeFromCart() should remove a car from the cart array", function() {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.checkout();

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  });
});
