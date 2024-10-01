
// La méthode create() est une méthode statique de l'objet Object en JavaScript. Elle permet de créer un nouvel objet en utilisant un objet existant comme prototype de ce nouvel objet.

// La syntaxe de la méthode create() est la suivante :


// Object.create(proto[, propertiesObject])

// proto : L'objet qui sera utilisé comme prototype pour le nouvel objet à créer. Il peut être null ou un objet.

// propertiesObject (facultatif) : Un objet contenant des propriétés supplémentaires à définir sur le nouvel objet créé.
// La méthode create() renvoie un nouvel objet avec le prototype spécifié. Le nouvel objet créé hérite des propriétés et des méthodes de son prototype. Il peut ensuite être étendu ou modifié selon les besoins.

// Voici un exemple d'utilisation de la méthode create() :


const person = {
  greet: function() {
    console.log("Hello!");
  }
};

const john = Object.create(person);
john.name = "John";

john.greet(); // "Hello!"
console.log(john.name); // "John"
// Dans cet exemple, l'objet person sert de prototype à l'objet john créé avec Object.create(). L'objet john hérite ainsi de la méthode greet() définie dans person. De plus, une propriété name est ajoutée spécifiquement à l'objet john, ce qui lui permet d'avoir des propriétés uniques en plus de celles héritées.

// Il est possible de passer un deuxième argument propertiesObject à la méthode create() pour définir des propriétés supplémentaires sur le nouvel objet créé. Cet argument est un objet qui spécifie des descripteurs de propriété. Voici un exemple :


const person2 = {
  greet: function() {
    console.log("Hello!");
  }
};

const johny = Object.create(person2, {
  name: {
    value: "Johny",
    writable: true,
    enumerable: true
  }
});

johny.greet(); // "Hello!"
console.log(johny.name); // "John"
// Dans cet exemple, la propriété name est définie avec un descripteur de propriété contenant les attributs value, writable et enumerable.

// La méthode create() est utile lorsque vous souhaitez créer un nouvel objet qui hérite des propriétés et des méthodes d'un objet existant, en utilisant la fonctionnalité de prototypage de JavaScript.