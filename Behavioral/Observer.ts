/**
 * Observer Design Pattern
 * 
 * The Observer Pattern defines a one-to-many dependency between objects so that 
 * when one object (the Subject) changes state, all its dependents (Observers) 
 * are notified and updated automatically.
 * 
 * Key Components:
 * 
 * 1. Subject (Observable):
 *    - Maintains a list of observers.
 *    - Notifies all observers of state changes.
 *    - Provides methods to subscribe and unsubscribe observers.
 * 
 * 2. Observer:
 *    - An interface or abstract class defining the `update` method.
 *    - Receives notifications when the Subject changes state.
 * 
 * 3. Concrete Subject:
 *    - Implements the Subject interface.
 *    - Contains the actual state and logic for managing observers.
 * 
 * 4. Concrete Observer:
 *    - Implements the Observer interface.
 *    - Responds to updates from the Subject (e.g., updates UI or logs data).
 * 
 * How It Works:
 * - Observers "subscribe" to a Subject.
 * - When the Subject's state changes, it calls the `update` method of all subscribed Observers.
 * - Observers can "unsubscribe" at any time to stop receiving updates.
 * 
 * Common Use Cases:
 * - User Interfaces: Views update when the underlying data model changes.
 * - Event Systems: Event listeners respond to user actions or other triggers.
 * - Real-time systems: Monitoring or notification systems (e.g., stock prices, weather).
 */
interface WeatherData {
  temperature: number;
  humidity: number;
}

interface Observer {
  update(data: WeatherData): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(observer: Observer): void;
}

class WeatherStation implements Subject{
  private observers: Observer[] = [];
  private data: WeatherData = {temperature: 0, humidity: 0};

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setWeatherData(data: WeatherData) {
    this.data = data;
    this.notify();
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.data))
  }
}

class TemperatureDisplay implements Observer {
  update(data: WeatherData): void {
    console.log("############################");
    console.log(`Temperature : ${data.temperature}`)
    console.log("############################");
  }
}

class HumidityDisplay implements Observer {
  update(data: WeatherData): void {
    console.log("############################");
    console.log(`Humidity : ${data.humidity}`)
    console.log("############################");
  }
}

class StatisticsDisplay implements Observer {
  update(data: WeatherData): void {
    console.log("---------------------------------")
    console.log(`Statistical Data : `)
    console.log(`Temperature : ${data.temperature}`)
    console.log(`Humidity : ${data.humidity}`)
    console.log("---------------------------------")
  }
}

const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay();
const humidityDisplay = new HumidityDisplay();
const statisticsDisplay = new StatisticsDisplay();

weatherStation.subscribe(temperatureDisplay);
weatherStation.subscribe(humidityDisplay);
weatherStation.subscribe(statisticsDisplay);

weatherStation.setWeatherData({temperature: 35, humidity: 20});
weatherStation.setWeatherData({temperature: 45, humidity: 10});
weatherStation.setWeatherData({temperature: -5, humidity: 15});
