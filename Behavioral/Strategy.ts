/**
 * The Strategy Design Pattern enables defining a family of algorithms, 
 * encapsulating each one in a separate class, and making them interchangeable.
 * 
 * Key Features:
 * 1. Encapsulation: Each algorithm (strategy) is implemented in its own class.
 * 2. Interchangeability: Strategies can be switched dynamically at runtime.
 * 3. Decoupling: The context class only interacts with the strategy interface,
 *    not the specific implementations.
 * 
 * Advantages:
 * 1. Adheres to the Open-Closed Principle: New strategies can be added without
 *    modifying existing code.
 * 2. Adheres to the Single Responsibility Principle: Each strategy focuses on
 *    a specific behavior or algorithm.
 * 3. Provides Flexibility: Enables dynamic selection of algorithms at runtime.
 * 
 * Example:
 * In this implementation, the `Cart` class acts as the context, using a
 * `DiscountStrategy` interface to calculate the total price. Concrete strategy
 * classes like `NoDiscountStrategy`, `FlatDiscountStrategy`, 
 * `PercentageDiscountStrategy`, and `BuyOneGetOneFreeStrategy` define specific
 * discount behaviors.
 */

interface Strategy {
  doDiscount(price: number): number;
}

class FlatDiscountStrategy implements Strategy{
  private discountAmount: number;

  constructor(discountAmount: number) {
    this.discountAmount = discountAmount;
  }

  doDiscount(price: number): number {
    return price - this.discountAmount;
  }
}

class NoDiscountStrategy implements Strategy{
  doDiscount(price: number): number {
    return price;
  }
}

class PercentageDiscountStrategy implements Strategy{
  private discountRate: number;

  constructor(discountRate: number) {
    this.discountRate = discountRate;
  }

  doDiscount(price: number): number {
    return price * (1 -  (this.discountRate / 100));
  }
}

type Item =  {
  name: string,
  price: number,
  quantity: number
}

class Cart {
  items: Item[] = [];
  strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  addItem(item : Item) {
    this.items.push(item);
  }

  setDiscountStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  getTotalPrice() {
    let total = 0;
    this.items.forEach((item) => total += item.price * item.quantity)
    return this.strategy.doDiscount(total);
  }
}
// Adding items to the cart
const cart = new Cart(new NoDiscountStrategy());
cart.addItem({ name: "Shirt", price: 20, quantity: 2 });
cart.addItem({ name: "Jeans", price: 50, quantity: 1 });
console.log("No Discount : " + cart.getTotalPrice()); // Should return the total price without any discount

// Setting a discount strategy
cart.setDiscountStrategy(new FlatDiscountStrategy(10));
// Calculating total price
console.log("Flat Discount : " + cart.getTotalPrice()); // Should return the total price after applying the flat discount

cart.setDiscountStrategy(new PercentageDiscountStrategy(10));
console.log("Percentage Discount : " + cart.getTotalPrice()); // Should return the total price after applying the flat discount