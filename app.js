// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos de 
    let valueInYen = valueInDollar * 159.875;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;





   // let valueInEuro = valueInYen * 127.9;
    //let valueInPound = valueInEuro * 0.8;
    return valueInPound

}


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar , fromDollarToYen, fromYenToPound};
