/**
Entrada:
[
    {name: "damian", surname: "sire"},
    {food: "pizza". surname: "perez"}
]
Salida: [name, surname, food]
*/

//Dado un array de objetos, encontrar sus claves unicas.

const uniqueKey = (array) => {
    const arrayOfKeys = array.map((element) => Object.keys(element))
    const uniqueKeys = [].concat(...arrayOfKeys)
    const uniqueKeysSet = new Set(uniqueKeys)    
    return Array.from(uniqueKeysSet);
};


module.exports = {
  uniqueKey,
};
