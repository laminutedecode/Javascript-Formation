// then est une méthode utilisée dans la programmation JavaScript avec les promesses (Promise) pour spécifier une action à effectuer lorsque la promesse est accomplie avec succès.

// Lorsque tu appelles la méthode then sur une promesse, tu lui passes une fonction qui sera exécutée lorsque la promesse est résolue avec succès (c'est-à-dire que l'opération asynchrone a réussi). Cette fonction prend généralement un paramètre qui représente la valeur réussie de la promesse.

const maPromesse = new Promise((resolve, reject) => {
  // Exemple d'une opération asynchrone (par exemple, une requête HTTP)
  setTimeout(() => {
    const réussite = true; // Simuler une réussite ou un échec

    if (réussite) {
      resolve("Résultat réussi"); // Résoud la promesse avec une valeur
    } else {
      reject("Erreur"); // Rejette la promesse avec une raison d'échec
    }
  }, 2000); // Délai simulé de 2 secondes
});

// Utilisation de la promesse avec then
maPromesse
  .then((valeur) => {
    console.log("Succès :", valeur);
  })
  .catch((raison) => {
    console.log("Erreur :", raison);
  });
// Dans cet exemple, nous avons une promesse maPromesse qui simule une opération asynchrone avec un délai de 2 secondes. Si l'opération réussit, nous appelons la fonction resolve avec la valeur "Résultat réussi".

// Ensuite, nous utilisons la méthode then pour spécifier une fonction à exécuter lorsque la promesse est résolue avec succès. Cette fonction reçoit la valeur réussie de la promesse (dans cet exemple, "Résultat réussi") et l'affiche dans la console.

// Il est important de noter que then renvoie une nouvelle promesse. Cela permet de chaîner plusieurs appels then les uns après les autres pour gérer une séquence d'opérations asynchrones. Chaque appel then peut retourner une valeur ou une nouvelle promesse, qui sera ensuite transmise au prochain then dans la chaîne.

// Si une erreur se produit lors de la résolution de la promesse, elle est "attrapée" par le bloc catch. Dans notre exemple, si l'opération échoue, la fonction de catch est appelée et affiche l'erreur dans la console.