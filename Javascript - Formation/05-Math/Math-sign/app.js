// La fonction Math.sign() en JavaScript est utilisée pour déterminer le signe d'un nombre donné. Elle renvoie un nombre indiquant si le nombre est positif, négatif ou nul.


console.log(Math.sign(3));    // Affiche 1 (le nombre est positif)
console.log(Math.sign(-5));   // Affiche -1 (le nombre est négatif)
console.log(Math.sign(0));    // Affiche 0 (le nombre est nul)

// Dans ces exemples, nous utilisons Math.sign() pour déterminer le signe des nombres donnés. La fonction renvoie 1 si le nombre est positif, -1 s'il est négatif et 0 s'il est nul.

// Il est important de noter que Math.sign() renvoie toujours un nombre de type number. Si l'argument donné est NaN (Not a Number), la fonction renverra NaN. Si l'argument est positif zéro (+0) ou négatif zéro (-0), la fonction renverra le même zéro correspondant au signe.




console.log(Math.sign(9));        // Affiche 1 (le nombre est positif)
console.log(Math.sign(-7));       // Affiche -1 (le nombre est négatif)
console.log(Math.sign(0.5));      // Affiche 1 (le nombre est positif)
console.log(Math.sign(-0.2));     // Affiche -1 (le nombre est négatif)
console.log(Math.sign(0));        // Affiche 0 (le nombre est nul)
console.log(Math.sign(NaN));      // Affiche NaN (argument n'est pas un nombre)
console.log(Math.sign(Infinity)); // Affiche 1 (Infinity est considéré comme positif)
console.log(Math.sign(-Infinity));// Affiche -1 (-Infinity est considéré comme négatif)

// En résumé, Math.sign() est une fonction JavaScript utilisée pour déterminer le signe d'un nombre. Elle renvoie 1 pour les nombres positifs, -1 pour les nombres négatifs et 0 pour les nombres nuls.