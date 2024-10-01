// La déclaration switch en JavaScript est une structure de contrôle utilisée pour évaluer une expression et exécuter différentes actions en fonction de la valeur de cette expression. Cela permet de simplifier la logique conditionnelle lorsque vous avez plusieurs cas possibles. Voici comment fonctionne la déclaration switch :

// La syntaxe générale de la déclaration switch est la suivante :


switch (expression) {
  case valeur1:
    // Instructions à exécuter si expression === valeur1
    break;
  case valeur2:
    // Instructions à exécuter si expression === valeur2
    break;
  // Autres cas possibles...
  default:
    // Instructions à exécuter si aucun des cas précédents n'est satisfait
}

// L'expression est évaluée une fois, puis comparée aux différentes valeurX spécifiées dans les case. Si une correspondance est trouvée, les instructions du case correspondant sont exécutées. Le mot-clé break est utilisé pour sortir de la déclaration switch après l'exécution des instructions d'un case.

// Si aucune correspondance n'est trouvée, les instructions du bloc default sont exécutées. Le bloc default est facultatif et agit comme une option par défaut lorsque la valeur de l'expression ne correspond à aucune des valeurX spécifiées dans les case.


let fruit = "pomme";

switch (fruit) {
  case "banane":
    console.log("C'est une banane.");
    break;
  case "pomme":
    console.log("C'est une pomme.");
    break;
  case "orange":
    console.log("C'est une orange.");
    break;
  default:
    console.log("Fruit inconnu.");
}
// Dans cet exemple, nous évaluons la valeur de la variable fruit. Si fruit est égal à "banane", le message "C'est une banane." est affiché. Si fruit est égal à "pomme", le message "C'est une pomme." est affiché. Si fruit est égal à "orange", le message "C'est une orange." est affiché. Si fruit ne correspond à aucune des valeurs spécifiées dans les case, le message "Fruit inconnu." est affiché.

// L'utilisation de la déclaration switch est souvent appropriée lorsque vous avez plusieurs cas à évaluer et que vous voulez éviter une longue série de conditions if...else if...else. Cependant, gardez à l'esprit que la déclaration switch ne prend en compte que l'égalité stricte (===) pour les comparaisons.