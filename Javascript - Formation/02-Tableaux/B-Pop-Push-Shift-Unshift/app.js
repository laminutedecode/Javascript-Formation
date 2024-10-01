// La méthode pop() est utilisée pour supprimer le dernier élément d'un tableau et renvoie cet élément supprimé. Elle modifie le tableau d'origine en supprimant l'élément.

let fruits = ['pomme', 'banane', 'orange'];
let dernierFruit = fruits.pop();
console.log(dernierFruit);  // affiche 'orange'
console.log(fruits);  // affiche ['pomme', 'banane']


// La méthode push() est utilisée pour ajouter un ou plusieurs éléments à la fin d'un tableau. Elle renvoie la nouvelle longueur du tableau. Elle modifie également le tableau d'origine en ajoutant les éléments.


let animaux = ['chien', 'chat'];
let nouvelleLongueur = animaux.push('souris', 'oiseau');
console.log(nouvelleLongueur);  // affiche 4
console.log(animaux);  // affiche ['chien', 'chat', 'souris', 'oiseau']


// La méthode shift() est utilisée pour supprimer le premier élément d'un tableau et renvoie cet élément supprimé. Elle modifie le tableau d'origine en supprimant l'élément et en déplaçant tous les éléments suivants vers la gauche pour remplir l'espace vide.

let villes = ['Paris', 'Londres', 'New York'];
let premiereVille = villes.shift();
console.log(premiereVille);  // affiche 'Paris'
console.log(villes);  // affiche ['Londres', 'New York']


// La méthode unshift() est utilisée pour ajouter un ou plusieurs éléments au début d'un tableau. Elle renvoie la nouvelle longueur du tableau. Elle modifie également le tableau d'origine en ajoutant les éléments et en décalant les éléments existants vers la droite.

let langages = ['JavaScript', 'Python'];
let nouvelleLongueur2 = langages.unshift('Java', 'C++');
console.log(nouvelleLongueur2);  // affiche 4
console.log(langages);  // affiche ['Java', 'C++', 'JavaScript', 'Python']