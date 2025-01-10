/**
 * Facade Design Pattern
 * 
 * The Facade Pattern provides a simplified interface to a complex subsystem. 
 * It hides the complexities of the system and exposes only the necessary functionality 
 * to the client. The client interacts with the facade, which delegates the work to 
 * the appropriate subsystems. This pattern is particularly useful when you want to 
 * provide a higher-level interface for a group of subsystems that would otherwise 
 * require numerous interactions and configurations.
 * 
 * Key Points:
 * - Simplifies interaction with complex subsystems by providing a unified interface.
 * - Hides the complexities of the system and exposes only the necessary functionality.
 * - Provides flexibility by allowing clients to interact with multiple subsystems through a single point.
 * - Reduces dependencies between the client and subsystems, promoting loose coupling.
 * - Commonly used when a system is made up of multiple smaller, more complex subsystems.
 * - Helps to organize code by separating concerns and promoting cleaner code.
 * 
 * In this example, the HomeAutomationFacade class acts as the facade to interact 
 * with various subsystems: Lights, MusicSystem, AirConditioner, and SecuritySystem. 
 * The client (e.g., `homeAutomationFacade`) can turn on/off all systems, set movie or 
 * party modes, and interact with the subsystems without needing to understand their 
 * individual complexities.
 */
class Lights {
  turnOn(): void {
    console.log("Turning on Lights");
  }
  turnOff(): void {
    console.log("Turning off Lights");
  }
  dim(level: number): void {
    console.log("Dim Lights to " + level);
  }
}

class MusicSystem {
  turnOn(): void {
    console.log("Turning on Music System");
  }
  turnOff(): void {
    console.log("Turning off Music System");
  }
  play(song: string) {
    console.log("Playing : " + song);
  }
  setVolume(level: number) {
    console.log("Setting volume to " + level);
  }
}

class AirConditioner {
  turnOn(): void {
    console.log("Turning on AC");
  }
  turnOff(): void {
    console.log("Turning off AC");
  }
  setTemperature(level: number) {
    console.log("Setting temperature to " + level);
  }
}
 
class HomeAutomationFacade {
  private ac : AirConditioner;
  private musicSystem: MusicSystem;
  private lights: Lights;

  constructor(ac: AirConditioner, musicSystem: MusicSystem, lights: Lights) {
    this.ac = ac;
    this.musicSystem = musicSystem;
    this.lights = lights;
  }

  turnOn(): void {
    this.ac.turnOn();
    this.musicSystem.turnOn();
    this.lights.turnOn();
  }

  turnOff(): void {
    this.ac.turnOff();
    this.musicSystem.turnOff();
    this.lights.turnOff();
  }

  setMovieMode(): void {
    this.ac.setTemperature(22);
    this.lights.dim(30);
    this.musicSystem.play("Relaxing song")
  }
}
const lights = new Lights();
const ac = new AirConditioner();
const musicSystem = new MusicSystem();
const homeAutomationFacade = new HomeAutomationFacade(ac, musicSystem, lights);

homeAutomationFacade.turnOn();

homeAutomationFacade.setMovieMode();

homeAutomationFacade.turnOff();