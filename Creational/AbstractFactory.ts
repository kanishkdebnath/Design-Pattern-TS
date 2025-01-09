/**
 * Abstract Factory Design Pattern
 * 
 * The Abstract Factory Pattern provides an interface for creating families
 * of related or dependent objects without specifying their concrete classes.
 * 
 * This pattern is useful when:
 * - A system should be independent of how its objects are created.
 * - A system needs to support multiple families of related objects (e.g., themes).
 * - New product families need to be added easily without modifying existing code.
 * 
 * Key Components:
 * 
 * 1. **Abstract Product (Button, TextInput)**:
 *    - Declares a common interface for a family of products.
 *    - Example: Both `DarkButton` and `LightButton` implement the `Button` interface.
 * 
 * 2. **Concrete Product (DarkButton, LightButton, etc.)**:
 *    - Implements the Abstract Product interface for a specific variant of the product family.
 *    - Example: `DarkButton` provides a dark-themed implementation of the `Button` interface.
 * 
 * 3. **Abstract Factory (UIFactory)**:
 *    - Declares methods to create each type of product in the product family.
 *    - Example: The `UIFactory` interface defines methods like `createButton()` and `createTextInput()`.
 * 
 * 4. **Concrete Factory (DarkThemeFactory, LightThemeFactory, etc.)**:
 *    - Implements the Abstract Factory interface to create specific product variants.
 *    - Example: `DarkThemeFactory` creates `DarkButton` and `DarkTextInput`.
 * 
 * 5. **Client (Application)**:
 *    - Uses the Abstract Factory to create products without knowing their concrete classes.
 *    - Example: The `Application` class interacts with the `UIFactory` to render UI components.
 * 
 * Benefits:
 * - **Encapsulation**: Client code is decoupled from the concrete classes of the products.
 * - **Scalability**: Adding a new product family (e.g., `HighContrastFactory`) doesn’t affect existing code.
 * - **Consistency**: Ensures that all products in a family match (e.g., Dark theme components are used together).
 * 
 * Example Use Case:
 * - A UI system with multiple themes (e.g., Dark, Light, High Contrast) where each theme has a consistent look and feel.
 */
interface Button {
  render(): void;
}

interface TextInput {
  render(): void;
}

class DarkButton implements Button {
  render(): void {
    console.log("Render Dark button");  
  }
}

class DarkTextInput implements TextInput {
  render(): void {
    console.log("Render Dark text input");  
  }
}

class LightButton implements Button {
  render(): void {
    console.log("Render Light button");  
  }
}

class LightTextInput implements TextInput {
  render(): void {
    console.log("Render Light text input");  
  }
}

interface UIFactory {
  createButton(): Button;
  createTextInput(): TextInput;
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createTextInput(): TextInput {
    return new DarkTextInput();
  }
}

class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createTextInput(): TextInput {
    return new LightTextInput();
  }
}

class Application {
  factory: UIFactory;
  constructor(factory: UIFactory) {
    this.factory = factory;
  }

  render() {
    this.factory.createButton().render();
    this.factory.createTextInput().render();
  }
}

const app1 = new Application(new DarkThemeFactory());
const app2 = new Application(new LightThemeFactory());

app1.render();

app2.render();

// bonus


class HighContrastButton implements Button {
  render(): void {
    console.log("Render High Contrast button");  
  }
}

class HighContrastTextInput implements TextInput {
  render(): void {
    console.log("Render High Contrast text input");  
  }
}

class HighContrastFactory implements UIFactory {
  createButton(): Button {
    return new HighContrastButton();
  }
  
  createTextInput(): TextInput {
    return new HighContrastTextInput();
  }
}

const app3 = new Application(new HighContrastFactory());
app3.render();

