// Boucle for : La boucle for est utilisée pour répéter un bloc de code un certain nombre de fois. Elle est composée de trois parties :
// L'initialisation : Une expression qui est exécutée avant le début de la boucle et qui initialise les variables ou compteurs.
// La condition : Une expression qui est évaluée avant chaque itération de la boucle. Si la condition est vraie, le bloc de code de la boucle est exécuté. Sinon, la boucle se termine.
// L'incrémentation : Une expression qui est exécutée après chaque itération de la boucle et qui modifie les variables ou compteurs.


for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Dans cet exemple, la boucle for va s'exécuter 5 fois. À chaque itération, la variable i est incrémentée de 1 et sa valeur est affichée dans la console.

// break : L'instruction break est utilisée pour arrêter l'exécution d'une boucle de manière anticipée, même si la condition de la boucle n'est pas encore fausse. Cela permet de sortir de la boucle prématurément. 
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Dans cet exemple, la boucle for va s'exécuter jusqu'à ce que la valeur de i soit égale à 3. Lorsque i atteint 3, l'instruction break est exécutée, ce qui arrête la boucle avant qu'elle ne se termine normalement.


// continue : L'instruction continue est utilisée pour passer à l'itération suivante d'une boucle, en sautant le reste du bloc de code pour l'itération courante. Cela permet d'ignorer certaines itérations de la boucle. Voici un exemple :
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// Dans cet exemple, la boucle for va s'exécuter 5 fois, mais lorsque i est égal à 2, l'instruction continue est exécutée. Cela saute le reste du bloc de code pour cette itération spécifique et passe à l'itération suivante.

// Ces instructions de contrôle (break et continue) sont utiles pour contrôler le flux d'exécution dans une boucle et pour prendre des décisions basées sur certaines conditions à l'intérieur de la boucle.