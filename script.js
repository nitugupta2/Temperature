function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');
  
    if (isNaN(input)) {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }
  
    const temperature = parseFloat(input);
    let result;
  
    switch (inputUnit) {
        case 'celsius':
            result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F<br>Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'fahrenheit':
            result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C<br>Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case 'kelvin':
            result = `Celsius: ${(temperature - 273.15).toFixed(2)}°C<br>Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            result = "Invalid unit!";
    }
  
    resultDiv.innerHTML = result;
}
