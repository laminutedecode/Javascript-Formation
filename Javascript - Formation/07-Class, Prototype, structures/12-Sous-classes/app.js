// Les sous-classes, également appelées classes dérivées ou classes enfants, sont des classes qui héritent des propriétés et des méthodes d'une classe parente, également appelée classe de base ou classe parente. Les sous-classes permettent d'étendre les fonctionnalités d'une classe existante en ajoutant des propriétés et des méthodes supplémentaires ou en modifiant celles héritées de la classe parente.



class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    direBonjour() {
        console.log(`Bonjour, je suis ${this.nom}`);
    }
}
// Pour créer une sous-classe en JavaScript, on utilise le mot-clé extends suivi du nom de la classe parente. La sous-classe peut ensuite ajouter ses propres propriétés et méthodes, ou bien modifier les propriétés et méthodes héritées de la classe parente.

class Chien extends Animal {
  constructor(nom, race) {
    super(nom); // Appel du constructeur de la classe parente
    this.race = race;
  }

  aboyer() {
    console.log('Woof woof!');
  }
}

// Création d'une instance de la sous-classe Chien
const monChien = new Chien('Max', 'Labrador');

console.log(monChien.nom); // Affiche: Max
console.log(monChien.race); // Affiche: Labrador
monChien.direBonjour(); // Affiche: Bonjour, je suis Max
monChien.aboyer(); // Affiche: Woof woof!
// Dans cet exemple, nous avons une classe parente Animal qui a une propriété nom et une méthode direBonjour. La sous-classe Chien étend la classe Animal à l'aide du mot-clé extends. Elle ajoute également une nouvelle propriété race et une méthode aboyer.

// Lorsque nous créons une instance de la sous-classe Chien avec new Chien('Max', 'Labrador'), le constructeur de la classe parente est appelé à l'aide de super(nom) pour initialiser la propriété nom. Ensuite, nous pouvons accéder aux propriétés et aux méthodes héritées de la classe parente (nom et direBonjour) ainsi qu'aux nouvelles propriétés et méthodes définies dans la sous-classe (race et aboyer).

// Les sous-classes permettent de hiérarchiser les classes et de partager des fonctionnalités communes tout en permettant des extensions spécifiques à chaque sous-classe. Cela favorise la réutilisation du code et la modularité.