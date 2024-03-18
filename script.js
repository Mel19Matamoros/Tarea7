function appendToDisplay(value) {
  document.getElementById('celsius').value += value;
}

function clearDisplay() {
  document.getElementById('celsius').value = '';
  document.getElementById('temperatureResult').innerText = ''; // Limpiar el contenido de temperatureResult
}

function deleteLast() {
  const currentValue = document.getElementById('celsius').value;
  document.getElementById('celsius').value = currentValue.slice(0, -1);
}

function appendToDispla(value) {
  document.getElementById('kilometers').value += value;
}

function clearDispla() {
  document.getElementById('kilometers').value = '';
  document.getElementById('distanceResult').innerText = ''; // Limpiar el contenido de temperatureResult
}

function deleteLas() {
  const currentValue = document.getElementById('kilometers').value;
  document.getElementById('kilometers').value = currentValue.slice(0, -1);
}

let activeInput; // Variable global para almacenar el cuadro de entrada activo

function appendToDispl(value) {
  if (activeInput) {
    activeInput.value += value;
  }
}

function clearDispl() {
  document.getElementById('weight').value = '';
  document.getElementById('height-meters').value = '';
  document.getElementById('height-centimeters').value = '';
  document.getElementById('bmiResult').innerText = ''; // Limpiar el contenido de temperatureResult
}

function deleteLa() {
  if (activeInput) {
    const currentValue = activeInput.value;
    activeInput.value = currentValue.slice(0, -1);
  }
}

function convertToCelsius() {
  const celsiusInput = document.getElementById('celsius').value;
  if (celsiusInput === '' || isNaN(celsiusInput)) {
    document.getElementById('temperatureResult').innerText = 'Ingrese una temperatura válida.';
    return;
  }
  const celsius = parseFloat(celsiusInput);
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('temperatureResult').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function convertToKelvin() {
  const celsiusInput = document.getElementById('celsius').value;
  if (celsiusInput === '' || isNaN(celsiusInput)) {
    document.getElementById('temperatureResult').innerText = 'Ingrese una temperatura válida.';
    return;
  }
  const celsius = parseFloat(celsiusInput);
  const kelvin = celsius + 273.15;
  document.getElementById('temperatureResult').innerText = `${celsius}°C = ${kelvin.toFixed(2)}K`;
}

function convertToMiles() {
  const kilometersInput = document.getElementById('kilometers').value;
  if (kilometersInput === '' || isNaN(kilometersInput)) {
    document.getElementById('distanceResult').innerText = 'Ingrese una distancia válida.';
    return;
  }
  const kilometers = parseFloat(kilometersInput);
  const miles = kilometers * 0.621371;
  document.getElementById('distanceResult').innerText = `${kilometers} km = ${miles.toFixed(2)} mi`;
}

function convertToMeters() {
  const kilometersInput = document.getElementById('kilometers').value;
  if (kilometersInput === '' || isNaN(kilometersInput)) {
    document.getElementById('distanceResult').innerText = 'Ingrese una distancia válida.';
    return;
  }
  const kilometers = parseFloat(kilometersInput);
  const meters = kilometers * 1000;
  document.getElementById('distanceResult').innerText = `${kilometers} km = ${meters} m`;
}

function calculateBMI() {
    const weightInput = document.getElementById('weight').value;
    const heightMeters = document.getElementById('height-meters').value;
    const heightCentimeters = document.getElementById('height-centimeters').value;
  
    if (weightInput === '' || isNaN(weightInput) || heightMeters === '' || isNaN(heightMeters) || heightCentimeters === '' || isNaN(heightCentimeters)) {
      document.getElementById('bmiResult').innerText = 'Ingrese un peso y una altura válidos.';
      return;
    }
  
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightMeters) + parseFloat(heightCentimeters) / 100;
  
    if (weight <= 0 || height <= 0) {
      document.getElementById('bmiResult').innerText = 'El peso y la altura deben ser mayores que cero.';
      return;
    }
  
    const bmi = weight / (height * height);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Bajo peso';
    } else if (bmi < 25) {
        bmiCategory = 'Normal';
    } else if (bmi < 30) {
        bmiCategory = 'Sobrepeso';
    } else {
        bmiCategory = 'Obeso';
    }

    document.getElementById('bmiResult').innerText = `Su IMC es: ${bmi.toFixed(2)}. Categoria: ${bmiCategory}`;
}
