/*
Bir değişken alın (prompt) ve bu değişkende saniye değerini atayın.
Bu saniye değerinin kaç dakika- saniyeye denk geldiğini yazdırın.
Örnek, 1200 değeri için 20 dakika 0 saniyedir.
*/
/* let second = parseInt(prompt("Saniyeyi giriniz:", 100));
 */let minute = parseInt(second / 60);
let remainingSecond = second % 60;
console.log(`${second} : ${minute} minute, ${remainingSecond} second`); 
