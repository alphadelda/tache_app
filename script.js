const taches = [];

const formulaire = document.querySelector("form");
const champTache = document.getElementById("champ-tache");
const listeTaches = document.getElementById("liste-taches");

function afficherTaches() {
  listeTaches.innerHTML = "";

  taches.forEach((tache) => {
    const element = document.createElement("li");
    element.textContent = tache;
    listeTaches.appendChild(element);
  });
}

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const tache = champTache.value.trim();
  if (tache === "") return;

  taches.push(tache);
  champTache.value = "";
  afficherTaches();
});
