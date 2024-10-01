
// En JavaScript, le mot-clé this fait référence à l'objet sur lequel une fonction est en cours d'exécution ou à l'objet qui est utilisé pour appeler une méthode. La valeur de this est déterminée lors de l'exécution d'une fonction et peut varier en fonction du contexte d'appel.

const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet(); // Affiche: Hello, my name is John and I am 30 years old.


// Dans cet exemple, nous avons un objet person avec les propriétés name et age, ainsi qu'une méthode greet(). Lorsque nous appelons person.greet(), la fonction greet() est exécutée avec this faisant référence à l'objet person. Ainsi, this.name fait référence à la valeur de name dans l'objet person, et this.age fait référence à la valeur de age dans l'objet person. Le résultat affiché sera "Hello, my name is John and I am 30 years old."

// L'utilisation de this permet à une méthode de faire référence aux propriétés de l'objet sur lequel elle est appelée, ce qui permet d'accéder et de manipuler les données spécifiques à cet objet.

// Cependant, il est important de noter que la valeur de this peut changer en fonction du contexte d'appel. Par exemple, si nous extrayons la méthode greet de l'objet person et l'appelons séparément, this ne sera plus lié à person, mais au contexte global (window dans un navigateur).