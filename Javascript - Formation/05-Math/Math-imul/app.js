// La fonction Math.imul() en JavaScript est utilisée pour effectuer une multiplication entière de deux nombres. Elle renvoie le résultat de la multiplication entière en utilisant une représentation sur 32 bits des nombres donnés.


console.log(Math.imul(2, 3));   // Affiche 6 (2 * 3)
console.log(Math.imul(-4, 5));  // Affiche -20 (-4 * 5)
console.log(Math.imul(-7, -8)); // Affiche 56 (-7 * -8)

// Dans ces exemples, nous utilisons Math.imul() pour effectuer des multiplications entières de deux nombres. La fonction renvoie le résultat de la multiplication entière.

// Il est important de noter que Math.imul() utilise une représentation sur 32 bits des nombres pour effectuer la multiplication. Cela signifie que seuls les 32 bits les moins significatifs des nombres sont pris en compte, et le résultat est tronqué à 32 bits également. Cela peut conduire à des résultats différents de la multiplication classique, en particulier pour les nombres très grands ou très petits.


console.log(Math.imul(10, 2));          // Affiche 20 (10 * 2)
console.log(Math.imul(123456789, 987654321)); // Affiche 115292150654748180 (multiplication de grands nombres)
console.log(Math.imul(-2, -3));         // Affiche 6 (-2 * -3)
console.log(Math.imul(0xffffffff, 2));  // Affiche -2 (truncation à 32 bits)
console.log(Math.imul(0x7fffffff, 0x7fffffff)); // Affiche -1 (truncation à 32 bits)

// En résumé, Math.imul() est une fonction JavaScript utilisée pour effectuer une multiplication entière de deux nombres. Elle renvoie le résultat de la multiplication entière en utilisant une représentation sur 32 bits des nombres donnés.