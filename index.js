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
  console.log(katzDeliLine);
  var response = [];
  if (katzDeliLine) {
    for (var person in katzDeliLine) {
      response.push(`${katzDeliLine.findIndex(e => e == person) + 1}: ${person}`);
    }
    return response.join(", ");
  }
  return "The line is currently empty."
}
