// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(response => {
		console.log(response);

		response.data.articles.javascript.forEach(article => {
			createCards.append(createCard(article));
		});
		response.data.articles.bootstrap.forEach(article => {
			createCards.append(createCard(article));
		});
		response.data.articles.technology.forEach(article => {
			createCards.append(createCard(article));
		});
		response.data.articles.jquery.forEach(article => {
			createCards.append(createCard(article));
		});
		response.data.articles.node.forEach(article => {
			createCards.append(createCard(article));
		});
	})
	.catch(error => {
		console.log(error);
	});

function createCard(article) {
	let newCard = document.createElement("div"),
		headline = document.createElement("div"),
		author = document.createElement("div"),
		imgContainer = document.createElement("div"),
		img = document.createElement("img"),
		span = document.createElement("span");

	newCard.classList.add("card");
	headline.classList.add("headline");
	author.classList.add("author");
	imgContainer.classList.add("img-container");

	newCard.append(headline);
	newCard.append(author);
	author.append(imgContainer);
	imgContainer.append(img);
	author.append(span);

	headline.textContent = article.headline;
	img.src = article.authorPhoto;
	span.textContent = `By ${article.authorName}`;

	return newCard;
}

let createCards = document.querySelector(".cards-container");
