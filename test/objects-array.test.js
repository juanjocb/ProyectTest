const { uniqueKey } = require("../src/libs/objects-array");

test("La funcion no explota", () => {
  uniqueKey([]);
});

test("Si recibe un array vacio, devuelve un array vacio", () => {
  const result = uniqueKey([]);
  expect(result).toEqual([]);
});

test("Si recibe un objeto vacio, devuelve un objeto vacio", () => {
  const result = uniqueKey([{}]);
  expect(result).toEqual([]);
});     

test("Si recibe un objeto de una clave, devuelve un esa clave", () => {
    const array = [{ name: "juan"}]
    const result = uniqueKey(array);
    expect(result).toEqual(["name"]);
  });

test("Si recibe un objeto con 3 claves, devuelve las claves", () => {
    const array = [{ name: "juan", surname: "cañas", age: 19}]
    const result = uniqueKey(array);
    expect(result).toEqual(["name", "surname", "age"]);
  });

  
test("Si recibe array con 2 objetos de 1 clave, devuelve las claves", () => {
    const array = [{ name: "juan"}, {surname: "cañas"}, {age: 19}]
    const result = uniqueKey(array);
    expect(result).toEqual(["name", "surname", "age"]);
  });

  test("Si recibe array con 2 objetos con la misma clave, devuelve 1 sola clave", () => {
    const array = [{ name: "juan"}, {name: "cañas"}, {age: 19}]
    const result = uniqueKey(array);
    expect(result).toEqual(["name", "age"]);
  });

  test("Si recibe array con muchos objetos con claves diferentes e iguales, devuelve las claves", () => {
    const array = 
    [
        { name: "juan", surname:"25", food: 19}, 
        { name: "cañas", city: "Armenia"}, 
        { age: 19}, 
        { sport: "soccer", surname:"fabricio", age: 19}, 
        { food: "pizza", surname:"giraldo", age: 19}, 
        { age: 19}
    ]
    const result = uniqueKey(array);
    expect(result).toEqual(["name", "surname", "food", "city", "age", "sport"]);
  });

