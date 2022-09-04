var howManyHundreds = function (number) {
  var inHun = number / 100;
  if (inHun < 1) {
    return 0;
  } else {
    return Math.floor(inHun)
  }
}