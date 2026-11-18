# Tache_app - Tableau de Post-its

Une application web interactive de type "tableau de liège" permettant de gérer des post-its (tâches) directement dans le navigateur, avec un design moderne et une persistance des données.

## Fonctionnalités

- Ajouter un post-it avec un titre et un contenu.
- Modifier un post-it existant (le formulaire se pré-remplit).
- Supprimer un post-it.
- Design visuel "Masonry" avec des post-its colorés (jaune, orange, rose) et un fond quadrillé.
- Conserver les post-its et leurs modifications dans le navigateur avec `localStorage`.

## Stack

HTML, CSS et JavaScript vanilla, avec `localStorage` pour la persistance.

## Lancer le projet

Ouvrez simplement le fichier `index.html` dans un navigateur web.

## Démarche et Collaboration avec l'IA

Le projet a été développé pas à pas avec l'agent IA **Codex** (intégré à VS Code), en gardant un contrôle total sur le code généré. Chaque étape a été testée dans le navigateur et validée manuellement avant de passer à la suivante.

**Étapes réalisées avec l'aide de l'IA :**
- Création du squelette HTML de base (sans CSS ni JS au départ).
- Refonte complète du design pour correspondre à une maquette visuelle précise (fond quadrillé, post-its colorés avec ombres, effet Masonry).
- Ajout de la logique JavaScript pour gérer deux champs distincts (Titre et Contenu).
- Remplacement du bouton de suppression classique par un bouton carré avec une croix.
- Ajout de la fonctionnalité de modification d'un post-it via le formulaire principal.
- Mise en place de la sauvegarde et du chargement avec `localStorage`.

**Précisions et corrections apportées par l'utilisateur :**
- L'utilisateur a exigé de découper le travail en petites tâches (un prompt = une action) pour éviter que l'IA ne génère tout d'un coup.
- L'utilisateur a guidé l'IA avec des instructions CSS très précises pour corriger la mise en page (pleine largeur, retrait d'éléments inutiles).
- L'utilisateur a demandé une revue de code critique à l'IA pour vérifier la robustesse du système.