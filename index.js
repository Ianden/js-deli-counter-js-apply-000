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
  if (katzDeliLine.length) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      response += `${i + 1}: ${katzDeliLine[0]}`;
    }
    return response.join(", ");
  }
  return "The line is currently empty."
}
