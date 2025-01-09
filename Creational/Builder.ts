/**
 * The Builder Design Pattern:
 * --------------------------------------------
 * - **Purpose**:
 *   - The Builder pattern is a creational design pattern that allows you to 
 *     construct complex objects step-by-step.
 *   - It separates the construction process from the representation of the object.
 *   - Useful when the creation process of an object involves multiple steps or configurations.
 *
 * - **Key Components**:
 *   1. **Product (Pizza)**:
 *      - The complex object being built.
 *      - Includes various attributes that can be set during the building process.
 *
 *   2. **Builder Interface (PizzaBuilder)**:
 *      - Specifies the methods required to build the product step-by-step.
 *      - Provides methods to configure the product's attributes (e.g., setSize, setCrust).
 *
 *   3. **Concrete Builder (CustomPizzaBuilder)**:
 *      - Implements the Builder interface.
 *      - Contains the logic to build and configure the product.
 *      - Returns the completed product through the `build()` method.
 *
 *   4. **Director (PizzaDirector)**:
 *      - Encapsulates the construction process.
 *      - Uses the builder to create predefined configurations of the product.
 *      - Optional but useful for reusing specific configurations.
 *
 * - **Advantages**:
 *   1. Supports the construction of complex objects in a step-by-step manner.
 *   2. Ensures that the construction process is decoupled from the final representation.
 *   3. Makes it easy to produce different configurations of the same product.
 *   4. Enables the use of a fluent API for better readability.
 *
 * - **When to Use**:
 *   - When constructing an object involves multiple steps.
 *   - When you need to create different representations of the same object.
 *   - When you want to enforce immutability and validation during object creation.
 *
 * - **Example**:
 *   In this code, we used the Builder pattern to create pizzas with customizable 
 *   attributes such as size, crust type, toppings, and sauce. The `PizzaDirector`
 *   simplifies creating predefined pizza configurations like Margherita or Pepperoni Special.
 */
class Pizza {
  readonly size: string;
  readonly crust: string;
  readonly toppings: string[];
  readonly sauce: string;
  
  constructor(size: string, crust: string, toppings: string[], sauce: string) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.sauce = sauce;
  }

  describe(): void {
    console.log(JSON.stringify(this));
  }
}

interface PizzaBuilder {
  setSize(size: string): PizzaBuilder;
  setCrust(crust: string): PizzaBuilder;
  addTopping(topping: string): PizzaBuilder;
  setSauce(sauce: string): PizzaBuilder;
  build(): Pizza;
}

class CustomPizzaBuilder implements PizzaBuilder{
  size: string = "regular";
  crust: string = "thin";
  toppings: string[] = [];
  sauce: string = "tomato";

  setSize(size: string): PizzaBuilder {
    this.size = size;
    return this;
  }
  setCrust(crust: string): PizzaBuilder {
    this.crust = crust;
    return this;
  }
  addTopping(topping: string): PizzaBuilder {
    this.toppings.push(topping);
    return this;
  }
  setSauce(sauce: string): PizzaBuilder {
    this.sauce = sauce;
    return this;
  }
  build(): Pizza {
    return new Pizza(this.size, this.crust, this.toppings, this.sauce);
  }
}

const customPizzaBuilder = new CustomPizzaBuilder();
const customPizza = customPizzaBuilder
  .setSize("Large")
  .setCrust("Thin")
  .addTopping("Cheese")
  .addTopping("Pepperoni")
  .setSauce("Spicy")
  .build();
customPizza.describe();

class PizzaDirector {
  pizzaBuilder = new CustomPizzaBuilder();
  createMargherita(): Pizza {
    return this.pizzaBuilder
    .setCrust("Thin")
    .setSauce("Marinara")
    .addTopping("Cheese")
    .addTopping("Basil")
    .setSize("Large")
    .build()
  }
}

const director = new PizzaDirector();
const margherita = director.createMargherita();
margherita.describe();