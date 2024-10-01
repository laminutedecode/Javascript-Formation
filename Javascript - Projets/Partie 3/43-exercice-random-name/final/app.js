var tabprenom = new Array("Jonathan", "clement", "lucie", "marie", "nelya");
var res = document.getElementById("resultat");
var btn = document.getElementById("btn");
var load = document.querySelector(".lds-ripple div");

btn.addEventListener("click", function () {
  load.classList.add("active");

  setTimeout(function aleatoire() {
    load.classList.remove("active");
    var rand = Math.floor(Math.random() * 5);
    res.innerHTML = `
        <p class="titre">⭐ Félicitation ⭐ </p>
        <p class="nom">💪 ${tabprenom[rand]} 💪</p>
      `;
    // res.innerText  = tabprenom[rand]
  }, 5000);
});
