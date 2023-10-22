function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit * 100) / 100;
}

const celsius1 = 25;
const celsius2 = -10;

const fahrenheit1 = celsiusToFahrenheit(celsius1);
const fahrenheit2 = celsiusToFahrenheit(celsius2);

console.log(`${celsius1}°C is equal to ${fahrenheit1}°F`);
console.log(`${celsius2}°C is equal to ${fahrenheit2}°F`);
