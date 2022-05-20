const fatArrow = _ => {
    document.write("Merhaba fat arrow!");
}
fatArrow();

function squareIt(number) {
    return number * number;
}

const squareIt2 = function (numberr) {
    return numberr * numberr;
}
document.write(squareIt2(5));

const fatArrow_Parameter = (number3) => {
    return number3 * number3;
}

const fatArrow_Parameter_short = number4 => number4 * number4;
document.write(fatArrow_Parameter_short(100));