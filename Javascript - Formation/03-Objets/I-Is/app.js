// La méthode is() est une méthode disponible pour les objets en JavaScript depuis ECMAScript 2015 (ES6). Elle permet de comparer si deux valeurs sont strictement égales, sans effectuer de coercition de type. Cela signifie que la méthode is() vérifie si les deux valeurs sont du même type et ont la même valeur.

// La syntaxe de la méthode is() est la suivante :


// Object.is(value1, value2)

// value1 et value2 : Les deux valeurs que vous souhaitez comparer.

// La méthode is() renvoie un booléen qui indique si les deux valeurs sont strictement égales. Elle retourne true si les valeurs sont égales et de même type, et false sinon.

// Voici quelques exemples d'utilisation de la méthode is() :


console.log(Object.is(5, 5)); // true
console.log(Object.is("hello", "hello")); // true
console.log(Object.is(null, null)); // true

console.log(Object.is(5, "5")); // false
console.log(Object.is({}, {})); // false
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true (Note: NaN est considéré égal à lui-même)
// Dans ces exemples, vous pouvez voir que la méthode is() compare les valeurs strictement. Elle renvoie true lorsque les valeurs sont strictement égales et false lorsque les valeurs sont différentes ou de types différents.

// Il est important de noter que la méthode is() diffère de l'opérateur === dans certains cas. Par exemple, Object.is(0, -0) renvoie false car il considère que 0 et -0 sont des valeurs différentes, bien qu'elles soient coercibles en la même valeur numérique. De même, Object.is(NaN, NaN) renvoie true, alors que NaN est considéré comme non égal à lui-même avec l'opérateur ===.

// La méthode is() est utile lorsque vous souhaitez comparer des valeurs de manière stricte, en évitant les règles de coercition de type de JavaScript.