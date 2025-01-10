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