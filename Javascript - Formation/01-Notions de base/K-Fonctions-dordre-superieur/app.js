// Une fonction d'ordre supérieur en programmation est une fonction qui peut prendre une ou plusieurs fonctions en tant que paramètres et/ou qui peut renvoyer une fonction en tant que résultat. Les fonctions d'ordre supérieur sont une caractéristique clé de la programmation fonctionnelle et permettent de manipuler et de traiter les fonctions de manière plus flexible et expressive.

// Voici quelques concepts importants relatifs aux fonctions d'ordre supérieur :

// Passage de fonctions en tant que paramètres :
// Une fonction d'ordre supérieur peut accepter une ou plusieurs fonctions en tant que paramètres. Ces fonctions peuvent être utilisées par la fonction d'ordre supérieur pour effectuer des opérations ou des transformations spécifiques.


function appliquerOperation(n, operation) {
  return operation(n);
}

function doubler(x) {
  return x * 2;
}

const resultat = appliquerOperation(5, doubler); // Utilise doubler comme fonction de transformation
console.log(resultat); // Affiche 10


// Renvoi de fonctions :
// Une fonction d'ordre supérieur peut également renvoyer une fonction en tant que résultat. La fonction renvoyée peut être utilisée ultérieurement ou passée comme argument à une autre fonction.


function creerMultiplicateur(n) {
  return function(x) {
    return x * n;
  };
}

const multiplierParDeux = creerMultiplicateur(2); // Renvoie une fonction qui multiplie par 2
const resultat2 = multiplierParDeux(5); // Utilise la fonction renvoyée pour multiplier 5 par 2
console.log(resultat2); // Affiche 10


// Manipulation des fonctions :
// Les fonctions d'ordre supérieur permettent de manipuler les fonctions de différentes manières, telles que la composition de fonctions, l'application partielle, la currying, etc. Cela offre une grande flexibilité dans la façon dont les fonctions peuvent être combinées et utilisées.


function doubler(x) {
  return x * 2;
}

function ajouterTrois(x) {
  return x + 3;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const doublerEtAjouterTrois = compose(ajouterTrois, doubler); // Compose les fonctions doubler et ajouterTrois
const resultat3 = doublerEtAjouterTrois(5); // Applique la composition aux données d'entrée
console.log(resultat3); // Affiche 13 (doubler(5) + 3)

// Les fonctions d'ordre supérieur permettent d'abstraire les opérations courantes, d'améliorer la réutilisabilité du code, de faciliter la composition et de créer des structures de contrôle flexibles. Elles sont largement utilisées en programmation fonctionnelle et sont une partie essentielle du paradigme fonctionnel.