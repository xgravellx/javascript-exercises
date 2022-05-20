/*
Write a program to display the current day and time in the following format.
Today is: Tuesday

*/

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is : ${daylist[day]}.`);
