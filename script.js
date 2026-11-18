const postitsEnregistres = localStorage.getItem("postits");
const anciennesTaches = postitsEnregistres
  ? JSON.parse(postitsEnregistres)
  : JSON.parse(localStorage.getItem("taches") || "[]");
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
const boutonSoumission = formulaire.querySelector('[type="submit"]');
let idEnCoursDeModif = null;

function sauvegarderTaches() {
  localStorage.setItem("postits", JSON.stringify(taches));
}

if (!postitsEnregistres && anciennesTaches.length > 0) {
  sauvegarderTaches();
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

    const actions = document.createElement("div");
    actions.classList.add("actions-postit");

    const boutonModifier = document.createElement("button");
    boutonModifier.type = "button";
    boutonModifier.textContent = "✏️";
    boutonModifier.classList.add("bouton-modifier");
    boutonModifier.setAttribute("aria-label", `Modifier le post-it : ${tache.titre}`);
    boutonModifier.addEventListener("click", () => {
      champTitre.value = tache.titre;
      champContenu.value = tache.contenu;
      idEnCoursDeModif = tache.id;
      boutonSoumission.textContent = "Enregistrer les modifications";
      champTitre.focus();
    });

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

    actions.append(boutonModifier, boutonSupprimer);
    element.append(titre, contenu, actions);
    listeTaches.appendChild(element);
  });
}

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();

  const titre = champTitre.value.trim();
  const contenu = champContenu.value.trim();
  if (titre === "" || contenu === "") return;

  if (idEnCoursDeModif !== null) {
    const tacheAModifier = taches.find((tache) => tache.id === idEnCoursDeModif);
    if (tacheAModifier) {
      tacheAModifier.titre = titre;
      tacheAModifier.contenu = contenu;
    } else {
      taches.push({ id: Date.now(), titre, contenu, terminee: false });
    }
    idEnCoursDeModif = null;
  } else {
    taches.push({ id: Date.now(), titre, contenu, terminee: false });
  }

  sauvegarderTaches();
  boutonSoumission.textContent = "Ajouter";
  champTitre.value = "";
  champContenu.value = "";
  afficherTaches();
});

afficherTaches();
