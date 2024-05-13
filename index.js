// index.js

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius
};
