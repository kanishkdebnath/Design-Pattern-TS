/**
 * Factory Design Pattern
 * 
 * The Factory Pattern defines an interface for creating objects, but allows
 * subclasses to alter the type of objects that will be created.
 * 
 * This pattern provides a way to delegate the instantiation logic of an object
 * to a separate method (factory), rather than creating objects directly in the
 * client code.
 * 
 * Key Components:
 * 
 * 1. **Product (Shape)**:
 *    - Defines the interface for objects created by the factory.
 *    - In this case, the Shape interface defines the common method `draw()` for all shapes.
 * 
 * 2. **Concrete Products (Circle, Rectangle, Square, etc.)**:
 *    - Classes that implement the Shape interface and define the specific object types.
 *    - Each class provides its own implementation of the `draw()` method.
 * 
 * 3. **Factory**:
 *    - The `ShapeFactory` is responsible for creating concrete shape objects.
 *    - It defines a `createShape()` method, which takes a `type` and returns the corresponding shape object.
 *    - This separates object creation from the client code and encapsulates it in the factory.
 * 
 * 4. **Client Code**:
 *    - The client code interacts with the factory to create objects.
 *    - It does not directly instantiate the concrete shapes, but uses the factory to create them.
 * 
 * Benefits:
 * - **Encapsulation**: Client code does not need to know the concrete class names; it only relies on the abstract interface.
 * - **Scalability**: New types of products (shapes) can be added without changing the existing factory or client code (adheres to the **Open-Closed Principle**).
 * - **Separation of Concerns**: Object creation logic is moved to the factory, keeping the client code simple.
 * 
 * Example Use Cases:
 * - When object creation logic is complex or needs to vary based on input.
 * - When an application needs to support multiple product variations that share common functionality.
 */

interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing circle.");
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log("Drawing rectangle.");
  }
}

class Square implements Shape {
  draw(): void {
    console.log("Drawing square.");
  }
}

class ShapeFactory {
  createShape(type: string): Shape {
    switch (type) {
      case "Circle": return new Circle();
      case "Rectangle": return new Rectangle();
      case "Square": return new Square();
      default: return new Circle();
    }
  }
}

const factory = new ShapeFactory();

const circle = factory.createShape("Circle");
const square = factory.createShape("Square");
const rectangle = factory.createShape("Rectangle");

circle.draw();
square.draw();
rectangle.draw();