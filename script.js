const tachesEnregistrees = localStorage.getItem("taches");
const taches = tachesEnregistrees ? JSON.parse(tachesEnregistrees) : [];

const formulaire = document.querySelector("form");
const champTache = document.getElementById("champ-tache");
const listeTaches = document.getElementById("liste-taches");

function sauvegarderTaches() {
  localStorage.setItem("taches", JSON.stringify(taches));
}

function afficherTaches() {
  listeTaches.innerHTML = "";

  taches.forEach((tache, index) => {
    const element = document.createElement("li");
    const caseACocher = document.createElement("input");
    caseACocher.type = "checkbox";
    caseACocher.checked = tache.terminee;
    caseACocher.addEventListener("change", () => {
      tache.terminee = caseACocher.checked;
      sauvegarderTaches();
      afficherTaches();
    });

    const texte = document.createElement("span");
    texte.textContent = tache.texte;

    if (tache.terminee) {
      element.classList.add("terminee");
    }

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.type = "button";
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.classList.add("bouton-supprimer");
    boutonSupprimer.addEventListener("click", () => {
      taches.splice(index, 1);
      sauvegarderTaches();
      afficherTaches();
    });

    element.append(caseACocher, texte, boutonSupprimer);
    listeTaches.appendChild(element);
  });
}

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const tache = champTache.value.trim();
  if (tache === "") return;

  taches.push({ texte: tache, terminee: false });
  sauvegarderTaches();
  champTache.value = "";
  afficherTaches();
});

afficherTaches();
