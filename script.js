// DATA — Member stats array

const members = [
  {
    name: "Benard Makodingo",
    score: 350,
    avatar: "https://randomuser.me/api/portraits/men/69.jpg",
    color: "#e2bbe2",
  },
  {
    name: "kigSmall Foot",
    score: 225,
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    color: "#aef0d2",
  },
  {
    name: "Caroline Likhol",
    score: 117,
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    color: "#f1d9c0",
  },
  {
    name: "Caroline Likhol",
    score: 321,
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
    color: "#ebcaeb",
  },
];

// Rendering Member cards into membersGrid id element

function renderMembers() {
  const grid = document.getElementById("membersGrid");
  if (!grid) return;

  grid.innerHTML = members
    .map(
      (member) => `
    <div class="col-6 col-md-3">
      <div class="member-card d-flex flex-column align-items-center p-3" style="background-color: ${member.color};">
      <div class="member-header">
      <img src="${member.avatar}" alt="${member.name}" class="member-avatar mb-2"/>
        <span class="member-name">${member.name}</span>
      </div>  
        <span class="member-score">${member.score}</span>
      </div>
    </div>
  `
    )
    .join("");
}

// Toggle functionality — Membership card descriptions

function setupMembershipToggles() {
  const toggles = [
    {
      toggleId: "foundationToggle",
      bodyId: "foundationBody",
      iconId: "foundationIcon",
    },
    { toggleId: "economyToggle", bodyId: "economyBody", iconId: "economyIcon" },
  ];

  toggles.forEach(({ toggleId, bodyId, iconId }) => {
    const toggleEl = document.getElementById(toggleId);
    const bodyEl = document.getElementById(bodyId);
    const iconEl = document.getElementById(iconId);

    if (!toggleEl || !bodyEl || !iconEl) return;

    toggleEl.addEventListener("click", () => {
      const isVisible = !bodyEl.classList.contains("hidden");

      if (isVisible) {
        // Hide it
        bodyEl.classList.add("hidden");
        iconEl.classList.add("collapsed");
        toggleEl.setAttribute("aria-expanded", "false");
      } else {
        // Show it
        bodyEl.classList.remove("hidden");
        iconEl.classList.remove("collapsed");
        toggleEl.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();
  setupMembershipToggles();
});
