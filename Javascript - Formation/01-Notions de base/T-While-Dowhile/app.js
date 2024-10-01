// Boucle while : La boucle while est utilisée pour répéter un bloc de code tant qu'une condition donnée est vraie. Elle a la structure suivante :

while (condition) {
  // Bloc de code à exécuter
  // La condition est évaluée avant chaque itération
}
// La condition est vérifiée avant chaque itération de la boucle. Si la condition est vraie, le bloc de code à l'intérieur de la boucle est exécuté. Si la condition devient fausse, la boucle s'arrête et l'exécution du programme continue après la boucle while.



let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// Dans cet exemple, la boucle while va s'exécuter tant que la valeur de i est inférieure à 5. À chaque itération, la valeur de i est affichée dans la console, puis incrémentée de 1.

// Boucle do-while : La boucle do-while est similaire à la boucle while, mais la condition est évaluée après l'exécution du bloc de code. Cela garantit que le bloc de code est exécuté au moins une fois, même si la condition est fausse dès le départ. La structure de la boucle do-while est la suivante :

do {
  // Bloc de code à exécuter
  // La condition est évaluée après chaque itération
} while (condition);

// Dans cet exemple, le bloc de code est exécuté une fois, puis la condition est évaluée. Si la condition est vraie, la boucle continue à s'exécuter. Sinon, la boucle s'arrête et l'exécution du programme continue après 


// la boucle do-while.

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);
// Dans cet exemple, le bloc de code est exécuté une première fois avec i égal à 0. Ensuite, la condition i < 5 est évaluée. Comme la condition est vraie, la boucle continue à s'exécuter jusqu'à ce que i atteigne 5.

// Différence entre while et do-while :
// La principale différence entre les deux boucles est le moment où la condition est évaluée. Dans la boucle while, la condition est évaluée avant chaque itération, ce qui signifie que le bloc de code peut ne jamais s'exécuter si la condition est fausse dès le départ. En revanche, la boucle do-while garantit que le bloc de code est exécuté au moins une fois, car la condition est évaluée après chaque itération.

// En résumé, utilise la boucle while lorsque tu veux répéter un bloc de code tant qu'une condition est vraie, et utilise la boucle do-while lorsque tu veux t'assurer que le bloc de code est exécuté au moins une fois, même si la condition est fausse dès le départ.