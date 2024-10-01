// La méthode Promise.all est une fonction statique disponible sur l'objet Promise en JavaScript. Elle est utilisée pour exécuter plusieurs promesses en parallèle et attendre que toutes les promesses se résolvent ou se rejettent avant de renvoyer le résultat.

// La syntaxe générale de Promise.all est la suivante :


// Promise.all(iterable)


// L'argument iterable passé à Promise.all doit être un tableau (ou un autre objet itérable) contenant des promesses. Promise.all renvoie une nouvelle promesse qui est résolue lorsque toutes les promesses du tableau sont résolues, et rejette immédiatement dès qu'une seule promesse est rejetée.


const promesse1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Résultat 1");
  }, 2000);
});

const promesse2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Résultat 2");
  }, 3000);
});

const promesse3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Résultat 3");
  }, 1000);
});

Promise.all([promesse1, promesse2, promesse3])
  .then((résultats) => {
    console.log("Tous les résultats :", résultats);
  })
  .catch((erreur) => {
    console.log("Erreur :", erreur);
  });
// Dans cet exemple, nous avons trois promesses promesse1, promesse2 et promesse3, qui représentent des opérations asynchrones simulées avec des délais différents. Nous passons ces promesses sous forme de tableau à Promise.all.

// Promise.all attend que toutes les promesses du tableau se résolvent ou se rejettent. Une fois que toutes les promesses sont résolues, la fonction de then est appelée avec un tableau contenant les résultats de toutes les promesses dans l'ordre correspondant. Dans notre exemple, "Résultat 1", "Résultat 2" et "Résultat 3" sont affichés dans la console.

// Si l'une des promesses est rejetée avant que toutes les promesses soient résolues, la fonction de catch est immédiatement appelée avec la raison du rejet. Par exemple, si nous rejetons promesse2, la fonction de catch est appelée avec l'erreur correspondante.

// Promise.all est utile lorsque tu as besoin d'exécuter plusieurs opérations asynchrones en parallèle et d'attendre leur achèvement collectif. Cela permet d'optimiser les performances en exécutant les opérations en parallèle plutôt qu'en séquence.

// Il est important de noter que si l'un des éléments de l'itérable passé à Promise.all n'est pas une promesse, il sera automatiquement converti en une promesse résolue avant d'être inclus dans le tableau des résultats.