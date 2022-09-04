const finalPosition = function (moves) {
  let xPosition = 0;
  let yPosition = 0;
  for (const move of moves) {
    if (move === 'north') {
      yPosition++;
    } else if (move === 'west') {
      xPosition--;
    } else if (move === 'east') {
      xPosition++;
    } else if (move === 'south') {
      yPosition--;
    }
  }
  return [xPosition, yPosition];
}