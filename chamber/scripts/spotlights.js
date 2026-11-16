const membersUrl = "data/members.json";
const spotlightEl = document.getElementById("spotlight-cards");
const levelNames = { 1: "Member", 2: "Silver", 3: "Gold" };

async function loadSpotlights() {
  try {
    const response = await fetch(membersUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const eligible = data.members.filter(m => m.level === 2 || m.level === 3);

    const selected = eligible
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    displaySpotlights(selected);
  } catch (error) {
    console.error("Could not load spotlights:", error);
    spotlightEl.textContent = "Member spotlights are currently unavailable.";
  }
}

function displaySpotlights(members) {
  spotlightEl.innerHTML = members.map(m => `
    <article class="spotlight-card">
      <h3>${m.name}</h3>
      <img src="images/${m.image}" alt="${m.name} logo" width="100" height="100" loading="lazy">
      <p>${m.phone}</p>
      <p>${m.address}</p>
      <p><a href="${m.website}" target="_blank" rel="noopener noreferrer">Visit website</a></p>
      <span class="level level-${m.level}">${levelNames[m.level]}</span>
    </article>`).join("");
}

loadSpotlights();