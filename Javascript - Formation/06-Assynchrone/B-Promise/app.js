// Une promesse (Promise) est un objet JavaScript qui représente l'état d'une opération asynchrone qui peut être en cours, réussie ou échouée, et qui peut produire une valeur à l'avenir. Les promesses sont utilisées pour gérer les opérations asynchrones de manière plus lisible et plus prédictible.

// Une promesse peut être dans l'un des trois états suivants :

// En attente (pending) : L'état initial d'une promesse. L'opération asynchrone est en cours d'exécution et la promesse est en attente d'une valeur ou d'un rejet.
// Accomplie (fulfilled) : L'opération asynchrone s'est terminée avec succès et la promesse a produit une valeur.
// Rejetée (rejected) : L'opération asynchrone s'est terminée avec une erreur ou un échec et la promesse a été rejetée avec une raison d'échec.
// Voici un exemple de création et d'utilisation d'une promesse :


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

// Utilisation de la promesse
maPromesse
  .then((valeur) => {
    console.log("Succès :", valeur);
  })
  .catch((raison) => {
    console.log("Erreur :", raison);
  });
// Dans cet exemple, nous créons une promesse maPromesse qui simule une opération asynchrone avec un délai de 2 secondes. Si l'opération réussit, nous appelons la fonction resolve avec la valeur "Résultat réussi". Sinon, nous appelons la fonction reject avec la raison de l'échec.

// Ensuite, nous utilisons les méthodes then et catch pour spécifier les actions à effectuer lorsque la promesse est accomplie avec succès ou rejetée. Si la promesse est accomplie, la fonction de then est appelée avec la valeur réussie. Si la promesse est rejetée, la fonction de catch est appelée avec la raison de l'échec.

// Il est également possible de chaîner plusieurs appels then pour gérer une séquence d'opérations asynchrones ou utiliser Promise.all pour exécuter plusieurs promesses en parallèle.

// Les promesses offrent une approche plus claire et plus structurée pour gérer les opérations asynchrones, en évitant les rappels (callbacks) en cascade et en facilitant la gestion des erreurs.