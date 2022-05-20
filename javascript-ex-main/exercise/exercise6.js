/*
Write a program to find the area of a triangle where lengths of the three of its sides are 5,6,7.*/

const side1 = 5;
const side2 = 6;
const side3 = 7;
const premeter = (side1 + side2 + side3) / 2;
const area1 = parseInt(Math.sqrt(premeter * ((premeter - side1) * (premeter - side2) * (premeter - side3))));
console.log(area1);
