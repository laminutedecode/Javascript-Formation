// En JavaScript, Map est une autre structure de données qui permet de stocker des paires clé-valeur. Contrairement à un objet JavaScript ordinaire, un Map permet d'utiliser n'importe quel type de valeur comme clé et conserve l'ordre d'insertion des éléments.

// Pour créer une nouvelle instance de Map, vous pouvez utiliser le constructeur Map() ou l'opérateur new Map(). Voici quelques exemples :


// Création d'un Map vide
const map = new Map();

// Création d'un Map avec des valeurs initiales
const map2 = new Map([
  ['clé1', 'valeur1'],
  ['clé2', 'valeur2'],
  ['clé3', 'valeur3']
]);

// Ajouter des paires clé-valeur au Map
map.set('clé1', 'valeur1');
map.set('clé2', 'valeur2');
map.set('clé3', 'valeur3');

// Accéder à une valeur en utilisant la clé
console.log(map.get('clé1')); // Renvoie 'valeur1'

// Vérifier si une clé existe dans le Map
console.log(map.has('clé2')); // Renvoie true

// Supprimer une paire clé-valeur du Map
map.delete('clé3');

// Obtenir le nombre d'éléments dans le Map
console.log(map.size); // Renvoie 2

// Parcourir les paires clé-valeur du Map avec une boucle for...of
for (const [clé, valeur] of map) {
  console.log(clé, valeur);
}

// Effacer tous les éléments du Map
map.clear();
// Les clés dans un Map sont uniques, ce qui signifie qu'une clé ne peut pas avoir plusieurs valeurs associées. Cependant, différentes clés peuvent avoir des valeurs identiques.

// Map offre également plusieurs méthodes pour récupérer des informations sur les clés, les valeurs et les entrées du Map. Par exemple :


const map3 = new Map([
  ['clé1', 'valeur1'],
  ['clé2', 'valeur2'],
  ['clé3', 'valeur3']
]);

// Récupérer toutes les clés du Map
const clés = Array.from(map3.keys());
console.log(clés); // Renvoie ['clé1', 'clé2', 'clé3']

// Récupérer toutes les valeurs du Map
const valeurs = Array.from(map3.values());
console.log(valeurs); // Renvoie ['valeur1', 'valeur2', 'valeur3']

// Récupérer toutes les entrées (paires clé-valeur) du Map
const entrées = Array.from(map3.entries());
console.log(entrées); // Renvoie [['clé1', 'valeur1'], ['clé2', 'valeur2'], ['clé3', 'valeur3']]
// Les Map peuvent être très utiles lorsque vous avez besoin de stocker des associations clé-valeur et que vous souhaitez conserver l'ordre d'insertion des éléments. Ils offrent une alternative aux objets JavaScript pour des cas d'utilisation spécifiques et fournissent des méthodes supplémentaires pour manipuler les données de manière plus flexible.