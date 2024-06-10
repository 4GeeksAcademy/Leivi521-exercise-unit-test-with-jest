//app.js file content
const sum = (a,b) => {
    return a + b
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
} 


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 156.5) * .87
    return valueInPound
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}






// // Just a console log for ourselves
// console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }





// Our program needs to have functions to convert fromDollarToYen, fromEuroToDollar, and fromYenToPound.

// Function name	Input	Output
// fromDollarToYen	a Dollar amount	equivalent amount in Japan YEN
// fromEuroToDollar	a Euro amount	equivalent amount in US Dollar
// fromYenToPound	a Yen amount	equivalent amount in British Pound
