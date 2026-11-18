const tachesEnregistrees = localStorage.getItem("taches");
const anciennesTaches = tachesEnregistrees ? JSON.parse(tachesEnregistrees) : [];
const taches = anciennesTaches.map((tache, index) => ({
  id: tache.id ?? Date.now() + index,
  titre: tache.titre ?? tache.texte ?? "",
  contenu: tache.contenu ?? "",
  terminee: Boolean(tache.terminee),
}));

const formulaire = document.querySelector("form");
const champTitre = document.getElementById("champ-titre");
const champContenu = document.getElementById("champ-contenu");
const listeTaches = document.getElementById("liste-taches");

function sauvegarderTaches() {
  localStorage.setItem("taches", JSON.stringify(taches));
}

function afficherTaches() {
  listeTaches.innerHTML = "";

  taches.forEach((tache, index) => {
    const element = document.createElement("li");
    if (tache.terminee) {
      element.classList.add("terminee");
    }

    const titre = document.createElement("h3");
    titre.textContent = tache.titre;

    const contenu = document.createElement("p");
    contenu.textContent = tache.contenu;

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.type = "button";
    boutonSupprimer.textContent = "✕";
    boutonSupprimer.classList.add("bouton-supprimer");
    boutonSupprimer.setAttribute("aria-label", `Supprimer le post-it : ${tache.titre}`);
    boutonSupprimer.addEventListener("click", () => {
      taches.splice(index, 1);
      sauvegarderTaches();
      afficherTaches();
    });

    element.append(titre, contenu, boutonSupprimer);
    listeTaches.appendChild(element);
  });
}

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const titre = champTitre.value.trim();
  const contenu = champContenu.value.trim();
  if (titre === "" || contenu === "") return;

  taches.push({
    id: Date.now(),
    titre,
    contenu,
    terminee: false,
  });
  sauvegarderTaches();
  champTitre.value = "";
  champContenu.value = "";
  afficherTaches();
});

afficherTaches();
