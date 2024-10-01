// En JavaScript, les concepts de static, private, et protected sont liés à l'utilisation des classes, qui sont apparues avec l'introduction de l'ECMAScript 6 (ES6) en 2015. Ces concepts permettent de mieux structurer le code, de gérer l'encapsulation, et d'assurer l'héritage dans le cadre de la programmation orientée objet.

// static (statique):

// La propriété ou la méthode statique appartient à la classe elle-même plutôt qu'à une instance particulière de la classe. Cela signifie que vous pouvez appeler une méthode statique sans avoir besoin d'instancier la classe.

class Exemple {
    static maMethodeStatique() {
      console.log("Méthode statique appelée");
    }
  }
  
  // Appel de la méthode statique sans instancier la classe
  Exemple.maMethodeStatique(); // Affiche "Méthode statique appelée"
  

//   private (privé):

// Les membres privés d'une classe ne sont accessibles que de l'intérieur de la classe. Cela signifie qu'ils ne peuvent pas être accédés ou modifiés directement depuis l'extérieur de la classe.

// À partir de l'ES6, vous pouvez utiliser le préfixe # pour déclarer des membres privés dans une classe :

class Exemple2 {
    #proprietePrivee = 42;
  
    #methodePrivee() {
      console.log("Méthode privée appelée");
    }
  
    utiliserProprietePrivee() {
      console.log(this.#proprietePrivee);
    }
  }
  
  let instance = new Exemple2();
  instance.utiliserProprietePrivee(); // Affiche 42
  // instance.#proprietePrivee; // Cela générerait une erreur car la propriété est privée
  

//   protected (protégé):

// Les membres protégés d'une classe sont accessibles à la fois depuis la classe elle-même et depuis les sous-classes qui en héritent. Cela permet d'encapsuler des fonctionnalités tout en permettant aux classes dérivées d'y accéder.

class Parent {
    #proprieteProtegee = "Je suis protégé";
  
    afficherProprieteProtegee() {
      console.log(this.#proprieteProtegee);
    }
  }
  
  class Enfant extends Parent {
    utiliserProprieteProtegee() {
      this.afficherProprieteProtegee(); // La classe dérivée peut accéder à la propriété protégée
    }
  }
  
  let enfantInstance = new Enfant();
  enfantInstance.utiliserProprieteProtegee(); // Affiche "Je suis protégé"
  // enfantInstance.#proprieteProtegee; // Cela générerait une erreur car la propriété est protégée

//   Les membres protégés sont utiles lors de la création de hiérarchies de classes où certaines fonctionnalités doivent être accessibles aux sous-classes, mais pas directement depuis l'extérieur de la classe.

// Il est important de noter que la gestion de la visibilité (private, protected, public) en JavaScript repose en grande partie sur des conventions plutôt que sur des mécanismes stricts, car JavaScript est un langage qui offre une flexibilité considérable. Les membres #private et #protected sont des ajouts plus récents à la spécification ECMAScript et peuvent ne pas être pris en charge dans tous les environnements d'exécution JavaScript.
  

