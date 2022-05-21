console.log("***********************************");
/*
Kullanıcıdan alınan değere kadar olan sayılar dizisini fibonacci şeklinde yazdırın.
fibonacci de iki sayının toplamı bir sonraki sayıyı oluşturuyor.
*/

function fibonacci(nbr5) {
    let result2 = [0, 1];
    for (let d = 2; d < nbr5; d++) {
        const  elementCalc = result2[d -1] + result2[d - 2];
        if (elementCalc < nbr5) {
            result2[d] = elementCalc;
        }
        else {
            break;
        }
    }
    return result2;
}
console.log(fibonacci(100));