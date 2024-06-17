// querySelector :
// La méthode querySelector permet de sélectionner un élément unique du DOM en utilisant un sélecteur CSS.

const qsEl = document.querySelector("#myDiv");
const qsEl2 = divElement.querySelector(".myClass");
const qsEl3 = divElement.querySelector("p");


// querySelectorAll :
// La méthode querySelectorAll permet de sélectionner tous les éléments du DOM correspondant à un sélecteur CSS donné, et renvoie une liste d'éléments.

const listeElements = document.querySelectorAll("li");

// getElementById :
// La méthode getElementById permet de sélectionner un élément unique du DOM en utilisant son attribut id.

const divElement = document.getElementById("myStr");

// getElementsByClassName :
// La méthode getElementsByClassName permet de sélectionner tous les éléments du DOM ayant une classe CSS spécifique, et renvoie une liste d'éléments.

const paragraphs = document.getElementsByClassName("h3");



// Il est possible de faire ceci, mais cela deviendra moins lisible
const el1 = document.querySelector('.p1'),
 el2 = document.querySelector('.p2'),
 el3 = document.querySelector('.p3');