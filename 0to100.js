var first = ["Hello", 5, "a"];

first[1] = 6;

var second = [];

for (var i = 1; i <= 100; i++) {
  second.push(i);
}

console.log(second.length);
console.log(second);

for (var i = 0; i < second.length; i++) {
  console.log("number: " + i);
}
