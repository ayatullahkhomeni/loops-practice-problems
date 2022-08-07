// 75.25, 65, 80, 35.45, 99.50 
// Mathematics, Biology, Chemistry, Physics, and Bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var totalMarks = totalMarks.toFixed(2);
var totalMarks = parseFloat(totalMarks);
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
var averageTwoDecimal = parseFloat(averageTwoDecimal);
console.log(averageTwoDecimal);    
