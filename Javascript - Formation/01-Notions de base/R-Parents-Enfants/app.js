const parentElement = document.getElementById('parent');
const currentElement = document.getElementById('current');

// children : La propriété children renvoie une collection des éléments enfants d'un élément spécifique. Cette propriété renvoie uniquement les éléments enfants, en ignorant les nœuds texte et les commentaires. Voici un 
const childrenElements = parentElement.children;
  console.log(childrenElements)

// childNodes : La propriété childNodes renvoie tous les nœuds enfants d'un élément spécifique, y compris les nœuds texte et les commentaires. 
const childNodes = parentElement.childNodes;
  console.log(childNodes);


// parentElement : La propriété parentElement renvoie l'élément parent d'un élément spécifique. Voici un exemple d'utilisation :
const childElement = document.getElementById('child');
const parentElements = childElement.parentElements;
console.log(parentElements);

// nextElementSibling : La propriété nextElementSibling renvoie l'élément suivant (frère) d'un élément spécifique, en ignorant les nœuds texte et les commentaires. 
const nextElementSibling = currentElement.nextElementSibling;
console.log(nextElementSibling);

// nextSibling : La propriété nextSibling renvoie le nœud suivant (frère) d'un élément spécifique, y compris les nœuds texte et les commentaires. 
const nextSibling = currentElement.nextSibling;
console.log(nextSibling);

// previousElementSibling : La propriété previousElementSibling renvoie l'élément précédent (frère) d'un élément spécifique, en ignorant les nœuds texte et les commentaires. 
const previousElementSibling = currentElement.previousElementSibling;
console.log(previousElementSibling);

// previousSibling : La propriété previousSibling renvoie le nœud précédent (frère) d'un élément spécifique, y compris les nœuds texte et les commentaires. 
const previousSibling = currentElement.previousSibling;
console.log(previousSibling);

// lastElementChild : La propriété lastElementChild renvoie le dernier élément enfant d'un élément spécifique, en ignorant les nœuds texte et les commentaires. 
const lastElementChild = parentElement.lastElementChild;
console.log(lastElementChild);

// firstElementChild : La propriété firstElementChild renvoie le premier élément enfant d'un élément spécifique, en ignorant les nœuds texte et les commentaires. 
const firstElementChild = parentElement.firstElementChild;
console.log(firstElementChild);

// Ces propriétés et méthodes DOM en JavaScript permettent de manipuler et de naviguer dans la structure des éléments HTML.