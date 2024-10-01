// La méthode fetch est une fonction JavaScript utilisée pour effectuer des requêtes HTTP asynchrones. Elle permet d'envoyer des requêtes réseau et de récupérer les réponses depuis un serveur. fetch est souvent utilisé pour récupérer des données à partir d'une API.

// Voici un exemple utilisant l'API JSONPlaceholder, qui fournit des données factices pour tester des requêtes HTTP :

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.getElementById('cards-container');
    
    data.forEach(post => {
      const card = createCard(post);
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log('Erreur :', error);
  });

function createCard(post) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h2');
  title.textContent = post.title;

  const body = document.createElement('p');
  body.textContent = post.body;

  card.appendChild(title);
  card.appendChild(body);

  return card;
}
