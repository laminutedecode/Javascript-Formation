// Le mot-clé new en JavaScript est utilisé pour créer une instance d'une classe en appelant son constructeur. Le constructeur est une méthode spéciale d'une classe qui est exécutée automatiquement lorsqu'une nouvelle instance de cette classe est créée à l'aide du mot-clé new.

// Voici comment le processus de création d'une instance avec new fonctionne en détail :

// Le mot-clé new crée un nouvel objet vide.
// La fonction constructeur de la classe est appelée avec this pointant vers le nouvel objet créé.
// Les propriétés et les méthodes définies à l'intérieur du constructeur peuvent être utilisées pour initialiser l'état de l'objet.
// L'objet nouvellement créé est renvoyé implicitement par le constructeur.
// Voici un exemple pour illustrer le processus de création d'une instance avec new :

class Personne {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  }
  
  const personne1 = new Personne('Alice', 25);
  console.log(personne1); // Affiche: Personne { nom: 'Alice', age: 25 }
  

//   Le mot-clé new est largement utilisé pour instancier des objets à partir de classes dans JavaScript. Il permet de créer des instances avec des états uniques et des fonctionnalités spécifiques définies dans la classe. Nous pouvons créer tous sorte d'objets avec ce constructeur:

// new Date() : L'expression new Date() est utilisée pour créer une nouvelle instance de l'objet Date. Cette instance représente une date et une heure spécifiques. Si aucun argument n'est passé à new Date(), il créera une instance contenant la date et l'heure actuelles. Par exemple :


const now = new Date();
console.log(now); // Affiche la date et l'heure actuelles

// On peut également passer des arguments à new Date() pour créer une instance avec une date spécifique. Par exemple :


const date = new Date(2023, 5, 17); // 17 juin 2023
console.log(date); // Affiche la date spécifique


// new Object() : L'expression new Object() est utilisée pour créer une nouvelle instance d'un objet vide. Cette instance est un objet générique sans méthodes ou propriétés définies spécifiquement. Par exemple :


const obj = new Object();
obj.prop = 'valeur';
console.log(obj); // Affiche { prop: 'valeur' }


// Bien que new Object() soit rarement utilisé directement, il peut être utilisé pour créer des objets vides qui seront ensuite étendus avec des propriétés et des méthodes.

// new Array() : L'expression new Array() est utilisée pour créer une nouvelle instance d'un tableau. Cette instance représente un tableau contenant une liste ordonnée d'éléments. Par exemple :


const arr = new Array();
arr.push('élément 1');
arr.push('élément 2');
console.log(arr); // Affiche [ 'élément 1', 'élément 2' ]


// new Array() peut également être utilisé avec des arguments pour initialiser le tableau avec des éléments spécifiques. Par exemple :


const arr2 = new Array('a', 'b', 'c');
console.log(arr2); // Affiche [ 'a', 'b', 'c' ]


// new String() : L'expression new String() est utilisée pour créer une nouvelle instance d'un objet String. Cette instance représente une chaîne de caractères. Par exemple :


const str = new String('Hello');
console.log(str); // Affiche 'Hello'

// Cependant, il est plus courant de créer des chaînes de caractères littérales directement, sans utiliser new String(). Par exemple :

const str2 = 'Hello';
console.log(str2); // Affiche 'Hello'
// Les objets String créés avec new String() ont des fonctionnalités supplémentaires et peuvent être traités comme des objets avec des méthodes spécifiques aux chaînes de caractères.

// new Number() : L'expression new Number() est utilisée pour créer une nouvelle instance d'un objet Number. Cette instance représente un nombre. Par exemple :

const num = new Number(42);
console.log(num); // Affiche 42

// Tout comme pour les chaînes de caractères, il est plus courant de travailler avec des nombres littéraux plutôt que d'utiliser new Number(). Par exemple :
const num2 = 42;
console.log(num2); // Affiche 42

// Les objets Number créés avec new Number() ont des fonctionnalités supplémentaires et peuvent être traités comme des objets avec des méthodes spécifiques aux nombres.


// Il est important de noter que l'utilisation de new pour les objets primitifs tels que String et Number n'est pas toujours nécessaire. JavaScript permet également d'utiliser des valeurs primitives directement sans instanciation d'objet, et les opérations courantes peuvent être effectuées sur les types de données primitifs.