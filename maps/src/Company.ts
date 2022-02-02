import faker from 'faker';
import { Markerable } from './customMap';

export class Company implements Markerable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
    this.color = faker.vehicle.color()
  };

  markerContent(): string {
    return `
    <div>
      <h1>
      Company Name: ${this.companyName}
      </h1>
      <p>Catch Phrase: ${this.catchPhrase}</p>
    </div>
    `
  }
};
