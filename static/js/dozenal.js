function getDozenalDigit() {
  var result = Math.floor(Math.random() * (12) + 1)
  console.log(result)
  if (result <= 9) {
    return `${result}`
  } else if (result == 10) {
    return '🌑'
  } else if (result == 11) {
    return '☀️'
  } else if (result == 12) {
    return '0'
  }
}

function getDzRoll() {
  return getDozenalDigit() + getDozenalDigit()
}

function setDozenalResult() {
  var element = document.getElementById('dz-result')
  element.innerHTML = `Last Result: ${getDozenalDigit()}`
}

function setDzResult() {
  var element = document.getElementById('dzp-result')
  element.innerHTML = `Last Result: ${getDzRoll()}`
}
