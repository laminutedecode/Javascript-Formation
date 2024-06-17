// La méthode values() est également disponible pour les tableaux en JavaScript. Elle est utilisée pour retourner un objet itérable contenant les valeurs des éléments du tableau.

// Voici comment utiliser la méthode values() avec un tableau :


const arr = [1, 2, 3];

const valeurs = arr.values();
console.log(valeurs); // Affiche: Object [Array Iterator] {}
// Dans cet exemple, nous avons un tableau arr contenant les éléments [1, 2, 3]. En appelant arr.values(), nous obtenons un objet itérable qui représente les valeurs des éléments du tableau. Dans ce cas, l'objet renvoyé est [Array Iterator] {}.

// Pour accéder aux valeurs du tableau, nous pouvons utiliser une boucle for...of ou convertir l'objet itérable en un tableau à l'aide de la fonction Array.from() :

const tab = [1, 2, 3];

const valeurs2 = tab.values();
for (const valeur of valeurs2) {
  console.log(valeur);
}
// Affiche:
// 1
// 2
// 3

// Ou, en utilisant Array.from()
const tabValeurs = Array.from(tab.values());
console.log(tabValeurs); // Affiche: [1, 2, 3]
// Il est important de noter que la méthode values() retourne un itérable qui suit l'ordre d'insertion des éléments du tableau. Cela signifie que les valeurs sont parcourues dans l'ordre dans lequel elles ont été ajoutées au tableau.

// La méthode values() est utile lorsque tu souhaites itérer uniquement sur les valeurs des éléments d'un tableau, sans avoir besoin de leurs indices correspondants.