
const ftoc = function(fahrenheit) {

  let fahrenheitResult;

  fahrenheitResult = ((fahrenheit - 32)*5)/(9);

  let roundedOffFahrenheit = parseFloat(fahrenheitResult.toFixed(1));

  return roundedOffFahrenheit;

};

const ctof = function(celcius) {

  let celciusResult;

  celciusResult = (1.8*(celcius)) + (32);

  let roundedOffCelcius = parseFloat(celciusResult.toFixed(1));

  return roundedOffCelcius;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
