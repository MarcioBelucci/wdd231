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