// Les classes sont une fonctionnalité du langage JavaScript introduite dans ECMAScript 2015 (ES6) qui permet de définir des objets avec des propriétés et des méthodes. Les classes fournissent une syntaxe plus orientée objet pour la programmation JavaScript et facilitent la création d'objets similaires (instances de classe) avec des comportements communs.

class Personnage {
    constructor(nom, prenom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
    }
  }
  
  // Création d'une instance de la classe Personnage
  const personnage = new Personnage('Doe', 'John', 30);
  
  console.log(personnage.nom); // Affiche: Doe
  console.log(personnage.prenom); // Affiche: John
  console.log(personnage.age); // Affiche: 30


//   Dans cet exemple, la classe Personnage a un constructeur qui prend trois paramètres : nom, prenom et age. Lorsqu'une instance de Personnage est créée avec new Personnage('Doe', 'John', 30), les valeurs 'Doe', 'John' et 30 sont assignées respectivement aux propriétés nom, prenom et age de l'objet personnage.

// Ensuite, nous pouvons accéder aux propriétés de l'objet personnage en utilisant la notation dot (personnage.nom, personnage.prenom, personnage.age), ce qui affichera les valeurs correspondantes ('Doe', 'John' et 30).

// Cet exemple illustre comment créer un objet Personnage avec des propriétés spécifiques et comment y accéder. Tu peux ajouter des méthodes supplémentaires à la classe Personnage selon les besoins de ton application.
  
  