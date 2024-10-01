// Une fonction pure en programmation est une fonction qui, lorsqu'elle est appelée avec les mêmes entrées, retourne toujours la même sortie et n'a aucun effet de bord observable à l'extérieur de la fonction. En d'autres termes, une fonction pure ne modifie pas l'état global, ne modifie pas les variables ou objets en dehors de sa portée locale, et ne provoque pas de changements dans l'environnement d'exécution.

// Voici quelques caractéristiques des fonctions pures :

// Déterminisme :
// Une fonction pure donne toujours le même résultat pour les mêmes entrées. Elle ne dépend pas de l'état global ou de l'état changeant dans le programme.

// Pas d'effets de bord :
// Une fonction pure n'a pas d'effets de bord observables à l'extérieur de la fonction. Elle ne modifie pas l'état global, n'effectue pas de modifications sur des objets mutables et ne provoque pas d'actions externes telles que des appels réseau ou des mutations de fichiers.

// Immutabilité :
// Les fonctions pures préfèrent l'utilisation de valeurs immuables plutôt que de modifier des variables existantes. Elles créent de nouvelles instances ou valeurs plutôt que de modifier les existantes.

// Indépendance du contexte :
// Une fonction pure ne dépend que de ses entrées et ne se soucie pas de l'état global ou de l'environnement d'exécution. Cela facilite la composition de fonctions pures.

// Voici un exemple de fonction pure :


function additionner(a, b) {
  return a + b;
}
// La fonction additionner est pure car elle prend deux nombres en entrée et retourne toujours la somme de ces deux nombres sans modifier l'état global ni provoquer d'effets de bord.

let count = 0;

function incrementCounter() {
  count++;
  console.log(`La valeur du compteur est maintenant : ${count}`);
}

// La fonction incrementCounter est impure car elle modifie l'état global de la variable count à chaque appel en l'incrémentant d'une unité. De plus, elle effectue une action observable en affichant un message dans la console. Cela signifie que l'exécution de la fonction a un effet au-delà de la valeur qu'elle renvoie.

// Les fonctions impures peuvent avoir des effets de bord, tels que la modification de variables globales, l'écriture dans des fichiers, l'envoi de requêtes réseau, l'interaction avec l'interface utilisateur, etc. Elles peuvent également dépendre de l'état externe ou de l'environnement pour fournir un résultat.

// Bien que les fonctions pures soient généralement préférées pour leur prévisibilité et leur facilité de test, il peut y avoir des situations où des fonctions impures sont nécessaires pour effectuer des tâches spécifiques qui nécessitent des effets de bord ou des interactions avec l'environnement externe.

// Les fonctions pures sont appréciées en programmation fonctionnelle car elles facilitent la compréhension et le test du code, ainsi que la réutilisation des fonctions. Elles permettent d'éviter les effets indésirables et d'améliorer la prévisibilité et la maintenabilité du code. Cependant, il est important de noter que toutes les fonctions ne peuvent pas être pures, en particulier lorsqu'il s'agit d'interagir avec l'environnement externe ou de gérer des états mutables.