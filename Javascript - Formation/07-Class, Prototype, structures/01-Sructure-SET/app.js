// En JavaScript, un ensemble (ou set) est une structure de données qui permet de stocker des valeurs uniques et non ordonnées. Contrairement à un tableau, un ensemble ne permet pas d'accéder aux éléments par un index, et il n'y a pas de notion d'ordre dans les éléments.

// Pour créer un ensemble en JavaScript, vous pouvez utiliser le constructeur Set() ou l'opérateur new Set(). Par exemple :


// Création d'un ensemble vide
const ensemble = new Set();

// Création d'un ensemble avec des valeurs initiales
const ensemble2 = new Set([1, 2, 3, 4, 5]);

// Ajouter des éléments à l'ensemble
ensemble.add(1);
ensemble.add(2);
ensemble.add(3);

// Supprimer un élément de l'ensemble
ensemble.delete(2);

// Vérifier si un élément existe dans l'ensemble
console.log(ensemble.has(1)); // Renvoie true

// Obtenir le nombre d'éléments dans l'ensemble
console.log(ensemble.size); // Renvoie 2

// Parcourir les éléments de l'ensemble avec une boucle for...of
for (const element of ensemble) {
  console.log(element);
}

// Effacer tous les éléments de l'ensemble
ensemble.clear();

// Un ensemble garantit que chaque élément est unique, ce qui signifie qu'il ne peut pas y avoir de doublons dans l'ensemble. Par exemple, si vous ajoutez deux fois la même valeur à un ensemble, seule une occurrence de cette valeur sera conservée.

// Les ensembles sont souvent utilisés pour effectuer des opérations d'union, d'intersection et de différence entre ensembles. JavaScript fournit des méthodes telles que union(), intersection(), difference() et subset() pour effectuer ces opérations sur les ensembles.


const ensemble3= new Set([1, 2, 3, 4]);
const ensemble4 = new Set([3, 4, 5, 6]);

// Union de deux ensembles
const union = new Set([...ensemble3, ...ensemble4]);
console.log(union); // Renvoie Set { 1, 2, 3, 4, 5, 6 }

// Intersection de deux ensembles
const intersection = new Set(
  [...ensemble3].filter((x) => ensemble4.has(x))
);
console.log(intersection); // Renvoie Set { 3, 4 }

// Différence entre deux ensembles
const difference = new Set(
  [...ensemble3].filter((x) => !ensemble4.has(x))
);
console.log(difference); // Renvoie Set { 1, 2 }

// Les ensembles offrent une manière pratique de stocker des valeurs uniques et de réaliser des opérations ensemblistes efficacement. Cependant, gardez à l'esprit que les ensembles n'ordonnent pas les éléments, et si vous avez besoin d'un ordre spécifique, vous devriez utiliser un tableau ou une autre structure de données appropriée.