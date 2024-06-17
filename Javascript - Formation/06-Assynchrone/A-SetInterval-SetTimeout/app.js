// setInterval est utilisé pour répéter l'exécution d'un bloc de code à intervalles réguliers. Il prend deux paramètres : une fonction à exécuter et un délai en millisecondes. Voici un exemple d'utilisation de setInterval :


setInterval(function() {
  console.log("Ceci sera affiché toutes les 2 secondes");
}, 2000);
// Dans cet exemple, la fonction anonyme passée en premier paramètre est exécutée toutes les 2 secondes (2000 millisecondes).

// Il est important de noter que setInterval renvoie un identifiant qui peut être utilisé pour annuler l'exécution répétée à l'aide de la fonction clearInterval. 
let intervalId = setInterval(function() {
  console.log("Ceci sera affiché toutes les 2 secondes");
}, 2000);

// Annuler l'exécution répétée après 10 secondes
setTimeout(function() {
  clearInterval(intervalId);
}, 10000);
// Dans cet exemple, setInterval est utilisé pour afficher un message toutes les 2 secondes. Après 10 secondes, clearInterval est utilisé pour arrêter l'exécution répétée.




// setTimeout, quant à lui, est utilisé pour exécuter une fonction une seule fois après un certain délai. Il prend également deux paramètres : une fonction à exécuter et un délai en millisecondes.


function afficherMessage() {
    console.log("Ceci sera affiché après 3 secondes");
  }
  
  var timeoutId = setTimeout(afficherMessage, 3000);
  
  // Annuler l'exécution retardée
  clearTimeout(timeoutId);
  

//   Dans cet exemple, nous avons défini une fonction nommée afficherMessage qui affiche un message dans la console. Nous utilisons setTimeout pour exécuter cette fonction après un délai de 3 secondes. Ensuite, nous utilisons clearTimeout avec l'identifiant timeoutId pour annuler l'exécution retardée.

// Il est important de noter que si clearTimeout est appelé avant que le délai ne s'écoule, la fonction spécifiée dans setTimeout ne sera jamais exécutée.

