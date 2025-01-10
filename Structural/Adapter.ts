/**
 * Adapter Design Pattern Definition:
 * 
 * The Adapter Design Pattern is a structural design pattern that acts as a bridge between two incompatible interfaces.
 * It allows an existing class to be used as if it implements a different interface, enabling integration without modifying 
 * the original class.
 * 
 * Key Components:
 * 1. **Target Interface**: Defines the domain-specific interface the client code expects to work with.
 * 2. **Adaptee**: The existing class with an incompatible interface.
 * 3. **Adapter**: A wrapper class that adapts the Adaptee to the Target Interface.
 * 4. **Client**: Code that uses the Target Interface and interacts with the Adapter as a proxy to the Adaptee.
 * 
 * Example Use Case:
 * - A system that processes payments expects a standard interface (`PaymentProcessor`) but needs to integrate with two 
 *   third-party APIs (`LegacyPaymentGateway` and `ModernPaymentGateway`) that have different method signatures.
 * 
 * Implementation Steps:
 * 1. Define the `PaymentProcessor` interface as the Target Interface.
 * 2. Create the `LegacyPaymentGateway` and `ModernPaymentGateway` classes as Adaptees with incompatible methods.
 * 3. Implement adapter classes (`LegacyPaymentAdapter`, `ModernPaymentAdapter`) that wrap the Adaptee classes
 *    and translate calls to the expected interface.
 * 4. Create a `PaymentProcessorFactory` to dynamically select the appropriate adapter based on a configuration.
 * 5. Use the adapters through the `PaymentProcessor` interface in client code without worrying about the underlying details.
 * 
 * Benefits:
 * - Promotes flexibility by decoupling the client code from the specific implementation of third-party APIs.
 * - Avoids modifying existing code (Adaptee), adhering to the Open-Closed Principle (OCP).
 * - Simplifies integration with multiple systems having incompatible interfaces.
 * 
 * Example Logging and Dynamic Selection:
 * - Adds a logging mechanism for debugging or auditing.
 * - Dynamically selects an adapter at runtime based on system configuration.
 */
interface PaymentProcessor {
  processPayment(amount: number): void;
  refundPayment(amount: number): void;
}

class LegacyPaymentGateway {
  makePayment(amount: number): void {
    console.log(`Processing Legacy payment : ${amount}`);
  }
  cancelPayment(amount: number): void {
    console.log(`Refunding Legacy payment : ${amount}`);
  }
}

class ModernPaymentGateway {
  pay(amount: number): void {
    console.log(`Processing Modern payment : ${amount}`);
  }
  reverse(amount: number): void {
    console.log(`Processing Modern payment : ${amount}`);
  }
}

class LegacyPaymentAdapter implements PaymentProcessor {
  private legacyPaymentGateway: LegacyPaymentGateway;

  constructor(legacyPaymentGateway: LegacyPaymentGateway) {
    this.legacyPaymentGateway = legacyPaymentGateway;
  }

  processPayment(amount: number): void {
    this.legacyPaymentGateway.makePayment(amount);
  }
  refundPayment(amount: number): void {
    this.legacyPaymentGateway.cancelPayment(amount);
  }
}

class ModernPaymentAdapter implements PaymentProcessor {
  private modernPaymentGateway: ModernPaymentGateway;

  constructor(modernPaymentGateway: ModernPaymentGateway) {
    this.modernPaymentGateway = modernPaymentGateway;
  }

  processPayment(amount: number): void {
    this.modernPaymentGateway.pay(amount);
  }
  refundPayment(amount: number): void {
    this.modernPaymentGateway.reverse(amount);
  }
}

const legacyPaymentGateway = new LegacyPaymentGateway();
const legacyPaymentAdapter = new LegacyPaymentAdapter(legacyPaymentGateway);

legacyPaymentAdapter.processPayment(123);
legacyPaymentAdapter.refundPayment(30);

const modernPaymentGateway = new ModernPaymentGateway();
const modernPaymentAdapter = new ModernPaymentAdapter(modernPaymentGateway);

modernPaymentAdapter.processPayment(123);
modernPaymentAdapter.refundPayment(30);
