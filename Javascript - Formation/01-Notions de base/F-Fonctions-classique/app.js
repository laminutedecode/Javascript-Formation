// En JavaScript, les fonctions classiques, également appelées "fonctions déclaratives" ou "fonctions nommées", sont un élément fondamental du langage. Elles permettent de regrouper un ensemble d'instructions pour les exécuter de manière répétée et réutilisable.

// ################## Déclaration de fonctions :
// Pour déclarer une fonction classique, on utilise le mot clé function, suivi du nom de la fonction et d'une paire de parenthèses. Les parenthèses peuvent contenir des paramètres, qui sont des variables utilisées pour recevoir des valeurs lors de l'appel de la fonction. Le corps de la fonction est délimité par des accolades et contient les instructions à exécuter lorsque la fonction est appelée.

function salutation(){
  console.log('Hello depuis ma fonction salutation');
}

// ##################  Appel de fonctions :
// Pour exécuter le code contenu dans une fonction, on utilise le nom de la fonction suivi de parenthèses. Si la fonction prend des paramètres, on les fournit entre les parenthèses de l'appel. L'appel d'une fonction entraîne l'exécution des instructions qu'elle contient, et éventuellement le renvoi d'une valeur à l'endroit où la fonction a été appelée.

salutation()

// ##################  Paramètres de la fonction :
// Les paramètres sont des variables utilisées pour recevoir des valeurs lors de l'appel de la fonction. Ils sont spécifiés entre les parenthèses lors de la déclaration de la fonction. Une fonction peut avoir zéro ou plusieurs paramètres.

function addition(a, b) {
  // Return: Une fonction peut renvoyer une valeur en utilisant le mot clé return. Cela permet d'obtenir un résultat calculé à l'intérieur de la fonction et de l'utiliser à l'extérieur.
  return a + b;
}

let resultat = addition(5, 3);
console.log(resultat); // Affiche 8



