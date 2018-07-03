var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var response = [];
  if (katzDeliLine.length) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      response.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently: " + response.join(", ");
  }
  return "The line is currently empty."
}
