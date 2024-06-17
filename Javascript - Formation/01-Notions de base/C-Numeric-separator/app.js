// Les numéric separators (séparateurs numériques) sont une fonctionnalité introduite dans ECMAScript 2021 (la dernière version de la spécification JavaScript) pour améliorer la lisibilité des nombres dans le code en permettant d'insérer des caractères de séparation pour les milliers.

// Le séparateur numérique est représenté par le caractère de soulignement (_). Il peut être utilisé dans les nombres entiers et les nombres à virgule flottante pour séparer les chiffres en groupes de trois afin d'améliorer la lisibilité.

// Voici un exemple pour illustrer son utilisation :


let million = 1_000_000;
console.log(million); // Affiche: 1000000

let billion = 1_000_000_000;
console.log(billion); // Affiche: 1000000000

let pi = 3.14_15_92_65;
console.log(pi); // Affiche: 3.14159265

// Comme vous pouvez le voir dans l'exemple, les caractères de soulignement sont utilisés pour séparer les chiffres en groupes de trois. Cela rend le code plus lisible, en particulier lorsqu'il s'agit de grands nombres.

// Il est important de noter que les caractères de soulignement n'affectent pas la valeur du nombre. Ils sont simplement ignorés lors de l'interprétation du nombre par le moteur JavaScript. Ainsi, 1_000_000 est équivalent à 1000000 sans les soulignements.