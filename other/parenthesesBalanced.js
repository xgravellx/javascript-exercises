function parentheses_Balanced(text) {
    const array = text.split('');

    const result = array.reduce(function (previos, character) {
        if (previos < 0 ) {
            return previos;
        }
        if (character === '(' ) {
            return ++previos;
        } 
        if (character === ')' ) {
            return --previos;
        }
        return previos;
    }, 0);

    if (!result) {
        console.log(`${text} Dengeli yapıdadır.`);
    }
    else {
        console.log(`${text} Dengeli yapıda değildir.`);
    }
}

parentheses_Balanced('()');