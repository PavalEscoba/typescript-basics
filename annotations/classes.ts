class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep, beep');
  };
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


// vehicle.honk(); cannot call it cause it is protected


class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);

  }

  private drive(): void {
    console.log('brrr-boom-boom');
  };

  startDriving(): void {
    this.drive();
    this.honk(); //can call it in child classes
  }
};

const car = new Car('black', 4);
console.log(car.color);
console.log(car.wheels);


car.startDriving();