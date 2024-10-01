// try et catch sont des mots-clés utilisés en JavaScript pour gérer les erreurs et les exceptions.

// Lorsque tu exécutes du code potentiellement susceptible de générer des erreurs, tu peux le placer dans un bloc try. Si une erreur se produit à l'intérieur du bloc try, elle est "attrapée" (capturée) et traitée par le bloc catch associé.

// Voici un exemple pour illustrer leur utilisation :

try {
  // Code potentiellement problématique
  const résultat = 10 / 0; // Division par zéro
  console.log(résultat);
} catch (erreur) {
  // Gestion des erreurs
  console.log("Une erreur s'est produite :", erreur);
}
// Dans cet exemple, nous essayons de diviser le nombre 10 par zéro, ce qui génère une erreur de division par zéro. Cette erreur est "attrapée" par le bloc catch, qui affiche un message d'erreur à la console.

// Le bloc catch est exécuté uniquement si une erreur se produit à l'intérieur du bloc try. Si aucune erreur ne se produit, le bloc catch est ignoré et le programme se poursuit normalement.

// Le bloc catch peut également recevoir un paramètre (ici, erreur), qui représente l'objet d'erreur généré. Tu peux utiliser cet objet pour obtenir des informations supplémentaires sur l'erreur, telles que son message d'erreur.

// Il est également possible d'utiliser plusieurs blocs catch pour traiter différents types d'erreurs de manière spécifique. Par exemple :


try {
  // Code potentiellement problématique
  const résultat2 = fonctionInexistante(); // Appel d'une fonction inexistante
  console.log(résultat2);
} catch (erreur1) {
  // Gestion des erreurs spécifiques
  console.log("Erreur 1 :", erreur1);
} catch (erreur2) {
  console.log("Erreur 2 :", erreur2);
}
// Dans cet exemple, nous tentons d'appeler une fonction inexistante, ce qui génère une erreur ReferenceError. La première erreur (erreur1) est attrapée par le premier bloc catch, tandis que la deuxième erreur (erreur2) serait attrapée par le deuxième bloc catch si elle se produisait.

// L'utilisation de try et catch permet de contrôler et de gérer les erreurs de manière plus robuste, en évitant que des erreurs non traitées ne perturbent l'exécution normale du programme.