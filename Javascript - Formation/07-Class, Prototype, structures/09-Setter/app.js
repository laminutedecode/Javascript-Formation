// En JavaScript, un "setter" est une méthode spéciale utilisée dans le contexte des classes pour définir la valeur d'une propriété d'un objet. Les setters sont utilisés conjointement avec les "getters" pour implémenter ce qu'on appelle des "accesseurs" ou "property accessors", permettant de contrôler l'accès à certaines propriétés d'un objet.

// Un setter est déclaré en utilisant le mot-clé set suivi du nom de la propriété que vous souhaitez définir. Voici un exemple simple pour illustrer l'utilisation d'un setter :

class Exemple {
    // Propriété privée conventionnelle
    _valeur = 0;
  
    // Getter
    get maValeur() {
      console.log("Getter appelé");
      return this._valeur;
    }
  
    // Setter
    set maValeur(nouvelleValeur) {
      console.log("Setter appelé");
      if (nouvelleValeur >= 0) {
        this._valeur = nouvelleValeur;
      } else {
        console.error("La valeur doit être supérieure ou égale à zéro");
      }
    }
  }
  
  let objet = new Exemple();
  
  // Utilisation du setter
  objet.maValeur = 42;  // Appelle le setter et affiche "Setter appelé"
  console.log(objet.maValeur);  // Appelle le getter et affiche "Getter appelé" suivi de 42
  
  // Tentative d'utilisation du setter avec une valeur négative
  objet.maValeur = -5;  // Affiche "Setter appelé" suivi de "La valeur doit être supérieure ou égale à zéro"
  console.log(objet.maValeur);  // Appelle le getter et affiche "Getter appelé" suivi de 42 car la valeur n'a pas été modifiée
  

//   Dans cet exemple, le setter maValeur est utilisé pour définir la valeur de la propriété _valeur. Avant d'effectuer la modification, le setter peut effectuer des vérifications ou des traitements particuliers, comme dans cet exemple où il vérifie si la nouvelle valeur est supérieure ou égale à zéro.

// L'utilisation de setters et de getters offre un moyen de contrôler l'accès à certaines propriétés d'un objet, permettant ainsi d'encapsuler la logique liée à ces propriétés. Cela contribue à une meilleure gestion des données et à une meilleure modularité dans le code.