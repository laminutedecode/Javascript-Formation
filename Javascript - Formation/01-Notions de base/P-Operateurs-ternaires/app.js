// L'opérateur ternaire, également connu sous le nom d'opérateur conditionnel, est une forme concise d'expression conditionnelle présente dans de nombreux langages de programmation, y compris JavaScript. Il vous permet d'évaluer une condition et d'exécuter une instruction en fonction du résultat de cette condition, le tout sur une seule ligne de code. Voici comment fonctionne l'opérateur ternaire :

// La syntaxe générale de l'opérateur ternaire est la suivante :


// condition ? expression_si_vraie : expression_si_fausse

// La condition est une expression booléenne (vrai ou faux) que vous souhaitez évaluer. Si la condition est vraie, alors expression_si_vraie sera exécutée. Sinon, expression_si_fausse sera exécutée.


let age = 20;

console.log(`Vous avez ${age}, vous etez donc ${(age >= 18) ? "Majeur" : "Mineur"}`);


// L'opérateur ternaire peut être utile lorsque vous avez une condition simple et que vous souhaitez attribuer une valeur ou exécuter une expression en fonction de cette condition de manière concise.

// Il est important de noter que bien que l'opérateur ternaire puisse rendre le code plus compact, il peut également devenir difficile à lire s'il est utilisé de manière excessive ou avec des expressions complexes. Utilisez-le avec parcimonie et veillez à ce que votre code reste compréhensible pour les autres développeurs qui pourraient le maintenir.