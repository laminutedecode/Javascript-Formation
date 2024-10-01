// La boucle for...in est une boucle utilisée pour parcourir les propriétés énumérables d'un objet en JavaScript. Elle itère sur toutes les propriétés énumérables, y compris celles héritées de la chaîne de prototypes de l'objet.


const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

for (let prop in person) {
  console.log(`${prop} : ${person[prop]}`);
}
// Dans cet exemple, nous avons un objet person avec des propriétés telles que name, age et occupation. La boucle for...in est utilisée pour itérer sur les propriétés de l'objet person. À chaque itération, le nom de la propriété est stocké dans la variable prop, puis nous utilisons cette variable pour accéder à la valeur de la propriété avec person[prop]. Cela nous permet d'afficher le nom de la propriété suivi de sa valeur.

// Il est important de noter que la boucle for...in itère sur toutes les propriétés énumérables de l'objet, y compris les propriétés héritées. Si tu veux itérer uniquement sur les propriétés propres à un objet et exclure les propriétés héritées, tu peux utiliser la méthode hasOwnProperty() pour effectuer une vérification supplémentaire.


for (let prop in person) {
  if (person.hasOwnProperty(prop)) {
    console.log(`${prop} : ${person[prop]}`);
  }
}
// En utilisant hasOwnProperty(), nous nous assurons que seules les propriétés propres à l'objet person sont prises en compte.
