const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `This is ${this.name}, manufactured ${this.year} and it is ${this.broken ? 'broken' : 'not broken'}`
  }
};


interface Reportable {
  summary(): string;
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink is ${this.color}, ${this.carbonated ? 'carbonated' : 'not carbonated'}, and has ${this.sugar}g of sugar.`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);