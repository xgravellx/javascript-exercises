 const numbers0 = [1, 2, 3, 4, 5];

/*  const result0  = numbers0.reduce(function (toplam, curr, index) {
     return toplam = toplam + curr;
 }, 0);

 console.log(result0); */

 
 const yeniDiziwithReduce = numbers0.reduce( function (dizininOncekiHali, oankiSayi) {
    dizininOncekiHali.push(oankiSayi * 5);
    return dizininOncekiHali;
 }, []);

 console.log(yeniDiziwithReduce);

 