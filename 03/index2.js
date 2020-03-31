// SET
let countrySet = new Set();
countrySet.add('de');
countrySet.add('pl');
let sets = Array.from(countrySet);

// MAP
let countryCodes = new Map();
countryCodes.set('Poland', 'pl');
countryCodes.set('Germany', 'de');
let mapa = Array.from(countryCodes.keys());

//WYNIK
let wynik = new Map();
wynik.set(mapa[0], sets.indexOf('pl'));
wynik.set(mapa[1], sets.indexOf('de'));

console.log(wynik);