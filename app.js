// campus-event-hub / app.js
console.log("Campus Event Hub - app.js loaded!");

// Dinamik Etkinlik Verisi (State)
let events = [
  {
    id: 1,
    title: "Web Dev Workshop",
    date: "Oct 24, 2026",
    description: "Learn modern HTML & CSS responsive design basics."
  },
  {
    id: 2,
    title: "Gaming Night",
    date: "Oct 28, 2026",
    description: "Esports tournaments and multiplayer party games."
  },
  {
    id: 3,
    title: "Career & Internship Talk",
    date: "Nov 02, 2026",
    description: "Insights on agile software methodologies and tech roles."
  },
  {
    id: 4,
    title: "AI & Cloud Meetup",
    date: "Nov 06, 2026",
    description: "Hands-on session with cloud deployments and web APIs."
  }
];// index.html dinamik kart listeleme
const eventContainer = document.querySelector("#event-list");

function renderEvents() {
  if (!eventContainer) return;
  eventContainer.innerHTML = "";

  for (const item of events) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = item.id;

    const titleEl = document.createElement("h3");
    titleEl.textContent = item.title;

    const dateEl = document.createElement("p");
    dateEl.className = "event-date";
    dateEl.textContent = `Date: ${item.date}`;

    const descEl = document.createElement("p");
    descEl.textContent = item.description;

    card.append(titleEl, dateEl, descEl);
    eventContainer.append(card);
  }
}

renderEvents();
// form.html validasyon ve submit kontrolü
const registrationForm = document.querySelector("form");
const nameInput = document.querySelector("#name") || document.querySelector("input[type='text']");
const emailInput = document.querySelector("#email") || document.querySelector("input[type='email']");
const errorMessage = document.querySelector("#form-error");
const successMessage = document.querySelector("#form-success");

if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameVal = nameInput ? nameInput.value.trim() : "";
    const emailVal = emailInput ? emailInput.value.trim() : "";

    if (nameVal === "" || emailVal === "") {
      if (errorMessage) errorMessage.textContent = "Please fill in all required fields.";
      if (successMessage) successMessage.textContent = "";
      return;
    }

    if (!emailVal.includes("@") || !emailVal.includes(".")) {
      if (errorMessage) errorMessage.textContent = "Please enter a valid email address.";
      if (successMessage) successMessage.textContent = "";
      return;
    }

    if (errorMessage) errorMessage.textContent = "";
    if (successMessage) {
      successMessage.textContent = "Registration successful! See you at the event.";
    }

    registrationForm.reset();
  });
}