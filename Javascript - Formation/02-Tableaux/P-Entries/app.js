// En JavaScript, la méthode entries() est une méthode disponible sur les objets Map et Array. Elle permet de retourner un nouvel objet itérable contenant des paires clé-valeur pour chaque élément dans le Map ou l'Array d'origine.

// Lorsqu'elle est appelée sur un objet Map, la méthode entries() retourne un nouvel objet itérable dont chaque élément est un tableau avec deux éléments : la clé et la valeur correspondante dans le Map. Par exemple :


const map = new Map();
map.set('fruit', 'apple');
map.set('color', 'red');

const entries = map.entries();
console.log([...entries]); // Affiche: [['fruit', 'apple'], ['color', 'red']]
// Lorsqu'elle est appelée sur un objet Array, la méthode entries() retourne également un nouvel objet itérable dont chaque élément est un tableau avec deux éléments : l'indice et la valeur correspondante dans l'Array. Par exemple :


const array2 = ['apple', 'banana', 'orange'];

const entries2 = array2.entries();
console.log([...entries2]); // Affiche: [[0, 'apple'], [1, 'banana'], [2, 'orange']]
// La méthode entries() est souvent utilisée en combinaison avec d'autres méthodes d'itération telles que forEach(), for...of, ou encore avec la décomposition (...) pour parcourir les éléments d'un Map ou d'un Array avec leurs clés et valeurs associées