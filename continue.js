var numbers = [45, 87, 89, 56, 32, 51, 25, 144, 25];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 50) {
        continue;
    }
    console.log(number);
}

// break and continue

var numbers = [45, 87, 89, 56, 32, 51, 25, 144, 25];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 50) {
        break;
    }
    console.log(number);
}