const str1 = document.querySelector('.str1');
const str2 = document.querySelector('.str2');
const box = document.querySelector('.box');
const liste = document.querySelector('.list');
const img = document.querySelector('img');
const cont = document.querySelector('.cont');
const cont2 = document.querySelector('.cont2');
const btn = document.querySelector('.btn');


// textContent : Il s'agit d'une propriété qui permet d'obtenir ou de définir le contenu textuel d'un élément du DOM. Elle renvoie le texte brut contenu dans un élément, sans prendre en compte le balisage HTML éventuel. 

str1.textContent = "Je suis du texte de textContent"

// innerText : C'est une propriété similaire à textContent, mais elle renvoie le texte visible à l'écran, en ignorant le contenu des éléments qui peuvent être masqués ou affectés par des styles CSS (comme display: none). Elle est sensible à la mise en forme et à la disposition des éléments.

str2.innerText = "Je suis du texte depuis innerText"

// innerHTML : Il s'agit d'une propriété qui permet d'obtenir ou de définir le contenu HTML d'un élément du DOM. Elle renvoie le balisage HTML inclus à l'intérieur de l'élément, y compris tous les éléments enfants. Vous pouvez également utiliser cette propriété pour insérer du HTML dans un élément.

box.innerHTML = `<p>Hello depuis box</p>`

// createElement : Il s'agit d'une méthode de l'objet document qui permet de créer un nouvel élément du DOM avec le nom de balise spécifié. Vous pouvez ensuite manipuler cet élément en lui ajoutant des attributs, du contenu ou des styles avant de l'insérer dans le document. 

const newEl = document.createElement('li')

newEl.innerText = "Je suis un nouvelle LI";

// appendChild : C'est une méthode qui permet d'ajouter un nœud enfant à un élément parent spécifié. L'enfant sera ajouté à la fin de la liste des enfants de l'élément parent. 

liste.appendChild(newEl)

// replaceWith : C'est une méthode qui permet de remplacer un élément par un ou plusieurs autres éléments. L'élément existant est supprimé du document et remplacé par les nouveaux éléments spécifiés. 

// children : C'est une propriété qui renvoie une collection d'objets représentant les éléments enfants d'un élément spécifié. Il renvoie uniquement les éléments, en ignorant les nœuds de texte ou les commentaires. Vous pouvez accéder aux enfants individuels en utilisant leurs index ou utiliser des boucles pour les parcourir. 

liste.children[0].replaceWith(newEl)


// La propriété src est utilisée pour spécifier l'URL (Uniform Resource Locator) de la source d'un élément dans le DOM, généralement utilisé pour les éléments tels que les images (<img>) ou les balises de script (<script>).

img.src="https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"


// La propriété style est utilisée pour accéder et modifier les styles CSS d'un élément du DOM en utilisant JavaScript. Elle permet de manipuler les propriétés CSS individuelles d'un élément spécifique, telles que la couleur du texte, la taille de la police, la largeur, la hauteur, etc.


cont.style.background = "red"

// className : Cette propriété permet d'accéder et de modifier les classes CSS d'un élément. Vous pouvez ajouter, supprimer ou remplacer les classes en manipulant cette propriété. Par exemple :
// javascript


cont2.className = "bor"


// classList : Il s'agit d'un objet qui représente la liste des classes CSS d'un élément. Il fournit des méthodes telles que add, remove, toggle, contains, etc., pour manipuler les classes de manière plus flexible

cont.classList.add('bor'); // Ajoute une nouvelle classe
cont.classList.remove('bor'); // Supprime une classe existante


btn.addEventListener('click', ()=> {
    cont.classList.toggle('bor'); // Ajoute ou supprime une classe en fonction de son existence
});

// setAttribute : Cette méthode permet de définir ou de modifier un attribut d'un élément. Elle peut être utilisée pour modifier des attributs liés au style tels que src, href, class, etc. Par exemple :

const element = document.querySelector('.boxEl');
element.setAttribute('data-custom', 'value'); // Ajoute un attribut personnalisé avec sa valeur
element.setAttribute('class', 'new-class'); // Modifie la classe de l'élément
element.setAttribute('style', 'color: blue; font-size: 16px;'); // Modifie les styles en utilisant un attribut style