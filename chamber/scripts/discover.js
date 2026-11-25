import { places } from "../data/discover.mjs";

const container = document.getElementById("discover-cards");

places.forEach((place, index) => {
  const card = document.createElement("article");
  card.className = `place-card place${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="images/${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button type="button">Learn more</button>`;

  container.appendChild(card);
});