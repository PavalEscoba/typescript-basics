const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error;
};

const todaysWeather = {
  date: new Date,
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

const logWeather_2015 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

const todaysWeather_2 = {
  date: new Date,
  weather: 'snowy'
};

logWeather_2015(todaysWeather_2);