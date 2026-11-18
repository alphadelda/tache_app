const taches = [];

const formulaire = document.querySelector("form");
const champTache = document.getElementById("champ-tache");
const listeTaches = document.getElementById("liste-taches");

function afficherTaches() {
  listeTaches.innerHTML = "";

  taches.forEach((tache) => {
    const element = document.createElement("li");
    const caseACocher = document.createElement("input");
    caseACocher.type = "checkbox";
    caseACocher.checked = tache.terminee;
    caseACocher.addEventListener("change", () => {
      tache.terminee = caseACocher.checked;
      afficherTaches();
    });

    const texte = document.createElement("span");
    texte.textContent = tache.texte;

    if (tache.terminee) {
      element.classList.add("terminee");
    }

    element.append(caseACocher, texte);
    listeTaches.appendChild(element);
  });
}

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const tache = champTache.value.trim();
  if (tache === "") return;

  taches.push({ texte: tache, terminee: false });
  champTache.value = "";
  afficherTaches();
});
