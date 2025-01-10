// Decorator Design Pattern

// Definition:
// The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, 
// either statically or dynamically, without affecting the behavior of other objects from the same class. 
// It involves creating a set of decorator classes that are used to wrap concrete components, providing additional functionality.

// Key Concepts:
// - **Component**: Defines the interface that can be implemented by both the base class and decorators.
// - **Concrete Component**: The core object to which additional functionality can be added.
// - **Decorator**: Abstract class or interface that implements the Component interface and contains a reference to a Component object.
// - **Concrete Decorator**: Extends the functionality of a Component by implementing the additional behavior.

// Advantages:
// 1. Promotes the **Open/Closed Principle** by allowing extension of functionality without modifying existing code.
// 2. Enhances flexibility by enabling dynamic combinations of behaviors at runtime.
// 3. Avoids creating an explosion of subclasses to accommodate all variations of functionality.

// Disadvantages:
// 1. Can lead to a system with many small, similar classes, which can increase complexity.
// 2. Debugging and understanding the nested structure of decorators can become difficult.

// Real-World Examples:
// - Adding extra features to UI components like borders, shadows, or scrollbars.
// - Enhancing objects with logging, encryption, or caching functionalities in software systems.
// - Middleware in web frameworks (e.g., Express.js), where each middleware acts as a decorator for the request/response cycle.

// UML Representation:
// [Component]
//      ▲
//      |
// [ConcreteComponent]          [Decorator]
//                              ▲      ▲
//                              |      |
//                     [ConcreteDecorator1]  [ConcreteDecorator2]

// When to Use:
// - When you need to dynamically add or modify functionality of an object at runtime.
// - When subclassing to achieve flexibility would result in an explosion of classes.

interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class PlainCoffee implements Coffee {
  getCost(): number {
    return 100;
  }
  getDescription(): string {
    return "Plain Coffee"
  }
}

abstract class CoffeeDecorator implements Coffee {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }
  getCost(): number {
    return this.coffee.getCost();
  }
  getDescription(): string {
    return this.coffee.getDescription();
  }
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  getCost(): number {
    return this.coffee.getCost() + 50;
  }
  getDescription(): string {
    return this.coffee.getDescription() + " Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  getCost(): number {
    return this.coffee.getCost() + 20;
  }
  getDescription(): string {
    return this.coffee.getDescription() + " Sugar";
  }
}

class CaramelDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  getCost(): number {
    return this.coffee.getCost() + 100;
  }
  getDescription(): string {
    return this.coffee.getDescription() + " Caramel";
  }
}

const order1 = new SugarDecorator(new MilkDecorator(new PlainCoffee()))
console.log("Description : " + order1.getDescription());
console.log("Cost : " + order1.getCost());

const order2 = new CaramelDecorator(new MilkDecorator(new PlainCoffee()))
console.log("Description : " + order2.getDescription());
console.log("Cost : " + order2.getCost());
