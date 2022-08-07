var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
/* fruits.push = 'Waterlemon'; */ // It;s wrong.
fruits.push('Waterlemon');
console.log(fruits); 