var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  return "The line is currently empty.";
}

function currentLine(katzDeliLine) {
  var response = [], i = 1;
  if (katzDeliLine) {
    for (var person in katzDeliLine) {
      response.push(`${i}: ${person}`);
    }
  }
}
