const url = "data/members.json";
const container = document.getElementById("members");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

const levels = { 1: "Member", 2: "Silver", 3: "Gold" };

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Could not load members:", error);
    container.textContent = "Sorry, the member list could not be loaded.";
  }
}

function displayMembers(members) {
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("article");
    card.className = "member-card";
    card.innerHTML = `
      <div class="card-head">
        <h2>${member.name}</h2>
        <p class="tagline">${member.tagline}</p>
      </div>
      <div class="card-body">
        <img src="images/${member.image}" alt="${member.name}" width="120" height="120" loading="lazy">
        <div class="details">
          <p><strong>EMAIL:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>URL:</strong> <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website.replace(/^https?:\/\/(www\.)?/, "")}</a></p>
          <p class="address"><strong>ADDRESS:</strong> ${member.address}</p>
          <span class="level level-${member.level}">${levels[member.level]}</span>
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function setView(view) {
  container.classList.toggle("grid", view === "grid");
  container.classList.toggle("list", view === "list");
  gridBtn.classList.toggle("active", view === "grid");
  listBtn.classList.toggle("active", view === "list");
  gridBtn.setAttribute("aria-pressed", view === "grid");
  listBtn.setAttribute("aria-pressed", view === "list");
}

gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

getMembers();