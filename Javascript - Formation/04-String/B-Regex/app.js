const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. 48948484874874157 Odit, cupiditate? "

// d = tout ce qui est chiffre
// \ : Permet d'échapper un métacaractère pour qu'il soit traité littéralement.
const regex1 = /\d/g;

// D = tout ce qui nest pas chiffre
const regex2 = /\D/g;

// S = tout ce qui nest pas un espace
const regex3 = /\S/g;

// s = match tout ce qui est espaces
const regex4 = /\s/g;

// W = tout ce qui nest pas Majuscule et minuscule
const regex5 = /\W/g;

// w = tout ce qui est majuscule, minuscule et chiffre
const regex6 = /\w/g;

// [A-Z] = match tout ce qui est lettre
const regex7 = /[A-Z]/gi;

// [^A-Z] = match tout ce qui n'est pas lettres
const regex8 = /[^A-Z]/gi;

// [a-z] = match tout ce qui est lettre minuscules
const regex9 = /[a-z]/gi;

// [^a-z] = match tout ce qui nest pas minuscules
const regex10 = /[^a-z]/gi;

// [0-9] = match tout ce qui est chiffre
const regex11 = /[0-9]/gi;

// [^0-9] = match tout ce qui nest pas chiffre

// . : Correspond à n'importe quel caractère.
const regex12 = /./g;

// ^ : Début de la chaîne.
const regex13 = /^/;

// $ : Fin de la chaîne.
const regex14 = /$/;

// [abc] : Correspond à l'un des caractères a, b ou c.
const regex15 = /[abc]/;

// [^abc] : Correspond à tout caractère sauf a, b et c.
const regex16 = /[^abc]/;

// * : Correspond à zéro ou plusieurs occurrences.
const regex17 = /pattern*/;

// + : Correspond à une ou plusieurs occurrences.
const regex18 = /pattern+/;

// ? : Correspond à zéro ou une occurrence.
const regex19 = /pattern?/;

// {n} : Correspond à exactement n occurrences.
const regex20 = /pattern{3}/;

// {n,} : Correspond à n occurrences ou plus.
const regex21 = /pattern{2,}/;

// {n,m} : Correspond à entre n et m occurrences.
const regex22 = /pattern{1,3}/;

// Caractères d'échappement :
const regex23 = /special\*/;


// Ancrages :
// \b : Correspond à une limite de mot (bordure de mot).
const regex24 = /\bword\b/;
// \B : Correspond à une position qui n'est pas une limite de mot.
const regex25 = /\Bword\B/;
// \ : Permet d'échapper un métacaractère pour qu'il soit traité littéralement.
const regex26 = /special\+/;

// Metacaracteres
const regex27 = /^start/;
const regex28 = /end$/;


// Groupes et Captures :
// ( ) : Crée un groupe de capture.
const regex29 = /(capture)/;


// Modificateurs
// i : Insensible à la casse.
// g : Recherche globale (trouver toutes les occurrences).

const regex = /[^0-9]/gi;




console.log(str.match(regex));