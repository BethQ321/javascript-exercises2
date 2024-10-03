const convertToCelsius = function(number) {
  let fahrenheit = (number - 32) * 5 / 9 ;
  fahrenheit = fahrenheit * 10;
  fahrenheit = Math.round(fahrenheit);
  fahrenheit = fahrenheit / 10;

  return fahrenheit;
};

const convertToFahrenheit = function(number) {
  let celsius = number * 9 / 5 + 32;
  celsius = celsius * 10;
  celsius = Math.round(celsius);
  celsius = celsius / 10;

  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
