const taches = [];

const formulaire = document.querySelector("form");
const champTache = document.getElementById("champ-tache");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const tache = champTache.value.trim();
  if (tache === "") return;

  taches.push(tache);
  champTache.value = "";
});
