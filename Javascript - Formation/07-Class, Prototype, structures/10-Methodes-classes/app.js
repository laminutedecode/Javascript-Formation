// Les méthodes de classe, également appelées méthodes statiques, sont des méthodes définies au niveau de la classe elle-même plutôt qu'au niveau des instances de classe. Contrairement aux méthodes régulières qui agissent sur des instances spécifiques de la classe, les méthodes de classe sont des méthodes qui peuvent être appelées directement sur la classe elle-même, sans nécessiter l'instanciation d'un objet.


class MaClasse {
  static methodeDeClasse() {
    console.log("Ceci est une méthode de classe.");
  }

  autreMethode() {
    console.log("Ceci est une méthode régulière.");
  }
}

// Appel de la méthode de classe sans instanciation
MaClasse.methodeDeClasse(); // Affiche: Ceci est une méthode de classe.

// Création d'une instance de la classe
const instance = new MaClasse();
instance.autreMethode(); // Affiche: Ceci est une méthode régulière.


// Dans cet exemple, nous avons une classe MaClasse qui possède une méthode de classe methodeDeClasse et une méthode régulière autreMethode. La méthode de classe est définie en utilisant le mot-clé static avant le nom de la méthode.

// Lorsque nous appelons MaClasse.methodeDeClasse(), nous faisons référence à la méthode de classe directement sur la classe elle-même, sans avoir besoin d'instancier un objet. En revanche, pour appeler la méthode régulière autreMethode, nous devons d'abord créer une instance de la classe (const instance = new MaClasse()) et ensuite appeler la méthode sur cette instance (instance.autreMethode()).

// Les méthodes de classe sont souvent utilisées pour regrouper des fonctionnalités liées à la classe elle-même, plutôt qu'à des instances spécifiques. Elles sont utiles pour les utilitaires, les fonctions d'assistance ou les méthodes qui effectuent des opérations indépendantes des instances.

// Il convient de noter que les méthodes de classe ne peuvent pas accéder aux propriétés ou aux méthodes spécifiques à une instance, car elles sont exécutées sur la classe elle-même. Par conséquent, les méthodes de classe sont généralement utilisées pour des opérations globales qui n'ont pas besoin d'accéder aux données spécifiques à une instance.