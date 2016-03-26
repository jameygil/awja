var count = function(string) {
  var num = {};
  for (var i = 0; i < string.length; i++) {
    if (!num[string[i]]) {
      num[string[i]] = 1;
  } else {
      num[string[i]] += 1;
    }
  }
  return num;
}
