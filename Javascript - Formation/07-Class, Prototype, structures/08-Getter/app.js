// Un "getter" est une fonction spéciale dans un objet JavaScript qui permet d'accéder à la valeur d'une propriété de cet objet. Les getters sont utilisés pour lire la valeur d'une propriété de manière sécurisée, en permettant l'exécution de logique supplémentaire avant de renvoyer la valeur.

// Voici un exemple simple de l'utilisation d'un getter en JavaScript :

let objet = {
    _valeur: 42,  // Convention pour indiquer qu'il s'agit d'une propriété "privée"
  
    // Getter pour accéder à la valeur
    get valeur() {
      console.log("Accès à la valeur");
      return this._valeur;
    }
  };
  
  // Utilisation du getter
  console.log(objet.valeur);  // Affiche "Accès à la valeur" suivi de 42
  

//   Dans cet exemple, la propriété _valeur est considérée comme "privée" (bien que JavaScript n'ait pas de véritable notion de propriétés privées). Le getter valeur est utilisé pour accéder à la valeur de _valeur. Lorsque vous appelez objet.valeur, le code dans le getter est exécuté, permettant d'effectuer des actions supplémentaires avant de retourner la valeur.

// Notez que les getters sont souvent utilisés pour fournir un moyen d'accéder à des propriétés privées tout en encapsulant la logique interne de l'objet. Cela contribue à une meilleure conception orientée objet et à une séparation des préoccupations.