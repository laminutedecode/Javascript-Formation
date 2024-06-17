// Le mot-clé arguments en JavaScript est une variable spéciale disponible à l'intérieur du corps d'une fonction. Elle représente un objet de type tableau (semblable à un tableau) qui contient les arguments passés à la fonction lors de son appel. Le mot-clé arguments permet d'accéder à ces arguments, indépendamment du nombre d'arguments déclarés dans la signature de la fonction.


// ########## Accès aux arguments :
// À l'intérieur du corps d'une fonction, vous pouvez utiliser le mot-clé arguments pour accéder à tous les arguments passés lors de l'appel de la fonction, même si vous ne les avez pas déclarés explicitement dans la signature de la fonction.


function addition() {
  let somme = 0;
  for (let i = 0; i < arguments.length; i++) {
    somme += arguments[i];
  }
  return somme;
}

console.log(addition(1, 2, 3)); // Affiche 6
console.log(addition(5, 10, 15, 20)); // Affiche 50



// ############## Longueur des arguments :
// La propriété length de l'objet arguments indique le nombre d'arguments passés lors de l'appel de la fonction.

function afficherNombreArguments() {
  console.log(`Le nombre d'arguments est : ${arguments.length}`);
}

afficherNombreArguments(1, 2, 3); // Affiche "Le nombre d'arguments est : 3"
afficherNombreArguments("a", "b"); // Affiche "Le nombre d'arguments est : 2"


// ############# Arguments et paramètres :
// Les paramètres déclarés dans la signature de la fonction sont liés aux arguments correspondants lors de l'appel de la fonction. Cependant, les arguments peuvent être plus nombreux que les paramètres ou vice versa. Les arguments supplémentaires sont accessibles via arguments, tandis que les paramètres en excès sont ignorés.


function exemple(a, b) {
  console.log(`a = ${a}, b = ${b}`);
  console.log(`Nombre d'arguments : ${arguments.length}`);
}

exemple(1, 2); // Affiche "a = 1, b = 2" et "Nombre d'arguments : 2"
exemple(1, 2, 3); // Affiche "a = 1, b = 2" et "Nombre d'arguments : 3"


// Le mot-clé arguments peut être utile lorsque vous souhaitez créer des fonctions flexibles qui acceptent un nombre variable d'arguments. Cependant, notez que arguments est un objet semblable à un tableau, mais pas un tableau réel. Pour utiliser des méthodes spécifiques aux tableaux, vous devrez le convertir en tableau à l'aide de Array.from(arguments) ou du nouvel opérateur de décomposition ([...arguments]).