// async/await est une syntaxe introduite dans ECMAScript 2017 (ES8) qui permet de travailler avec les promesses de manière plus lisible et plus synchrone. Elle simplifie la gestion des opérations asynchrones en utilisant des mots-clés spéciaux : async et await.

// async : async est utilisé pour déclarer une fonction asynchrone. Lorsqu'une fonction est déclarée avec le mot-clé async, cela signifie qu'elle renverra toujours une promesse. À l'intérieur d'une fonction asynchrone, tu peux utiliser l'opérateur await pour suspendre l'exécution et attendre la résolution d'une promesse.

// await : await est utilisé à l'intérieur d'une fonction asynchrone pour attendre la résolution d'une promesse. Lorsqu'une promesse est suivie de await, l'exécution de la fonction asynchrone est suspendue jusqu'à ce que la promesse soit résolue ou rejetée. Une fois résolue, la valeur réussie de la promesse est renvoyée. Si la promesse est rejetée, une exception est levée.

// Voici un exemple pour illustrer leur utilisation :

function attendre(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Opération réussie");
    }, delay);
  });
}

async function exécuter() {
  try {
    console.log("Début de l'exécution");

    const résultat1 = await attendre(2000);
    console.log("Résultat 1 :", résultat1);

    const résultat2 = await attendre(1000);
    console.log("Résultat 2 :", résultat2);

    console.log("Fin de l'exécution");
  } catch (erreur) {
    console.log("Erreur :", erreur);
  }
}

exécuter();
// Dans cet exemple, nous avons une fonction attendre qui renvoie une promesse qui se résout après un délai donné (simulé avec setTimeout).

// Ensuite, nous avons une fonction exécuter déclarée avec le mot-clé async. À l'intérieur de cette fonction, nous utilisons await pour attendre la résolution de chaque promesse retournée par la fonction attendre. L'exécution de la fonction exécuter est suspendue lorsqu'un await est rencontré, et elle reprend lorsque la promesse est résolue avec succès ou rejetée.

// La fonction exécuter est entourée d'un bloc try/catch pour capturer les erreurs potentielles lors de l'exécution des promesses. Si une erreur se produit, elle est capturée par le bloc catch et affichée dans la console.

// L'utilisation de async/await rend le code asynchrone plus lisible, en ressemblant davantage à un code synchrone traditionnel, tout en conservant les avantages des promesses. Cela évite les callbacks en cascade et permet une gestion plus naturelle des erreurs.

// Il est important de noter que await ne peut être utilisé qu'à l'intérieur d'une fonction déclarée avec async. De plus, await ne peut être utilisé qu'avec des objets promesses (ou des objets qui peuvent être résolus en tant que promesses).

