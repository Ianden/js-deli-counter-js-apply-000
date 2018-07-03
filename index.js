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
  var i = 0, response;
  for (var person in katzDeliLine) {

  }
}
