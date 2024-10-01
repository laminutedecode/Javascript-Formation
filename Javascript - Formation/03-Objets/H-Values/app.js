// La méthode values() est une méthode disponible pour les objets en JavaScript depuis ECMAScript 2017 (ES8). Elle permet de retourner un tableau contenant les valeurs des propriétés énumérables d'un objet, en ignorant les clés.

// La syntaxe de la méthode values() est la suivante :

// Object.values(obj)
// obj : L'objet dont on souhaite obtenir les valeurs des propriétés.


// La méthode values() renvoie un tableau contenant toutes les valeurs des propriétés énumérables de l'objet, dans l'ordre de leurs clés.

// Voici un exemple d'utilisation de la méthode values() avec un objet :


const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values);
// Le résultat de cet exemple sera un tableau contenant les valeurs des propriétés énumérables de l'objet person : ["John", 30, "New York"]


// On peut ensuite utiliser une boucle for...of pour itérer sur les valeurs du tableau retourné :


for (const value of Object.values(person)) {
  console.log(value);
}

// L'utilisation de values() est utile lorsque vous souhaitez uniquement obtenir les valeurs des propriétés d'un objet, sans vous soucier des clés associées. Elle est pratique pour itérer ou effectuer des opérations sur les valeurs d'un objet.

// Il est important de noter que l'ordre des valeurs dans le tableau retourné par values() correspond à l'ordre de leurs clés. Cependant, il n'y a aucune garantie que les propriétés seront itérées dans cet ordre, car la spécification JavaScript ne garantit pas l'ordre des propriétés dans un objet.