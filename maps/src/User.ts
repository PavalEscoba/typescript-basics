import faker, { fake } from 'faker';
import { Markerable } from './customMap';

export class User implements Markerable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;


  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = faker.vehicle.color()
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
