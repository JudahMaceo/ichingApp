var lineArray = [];


for (var i = 1; i <= 6; i++) {

console.log("this is line " + i);

var coinThrowArray = [];
console.log("about to throw coin number: ");
for (var j = 1; j <= 3; j++) {
    console.log(j);
    coinThrowArray.push(j);

  }
  lineArray.push(coinThrowArray);
}
console.log(lineArray);
