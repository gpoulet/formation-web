var animals = [];
var id = 0;

/**
 * Repaint l'interface graphique en supprimant tous les éléments qui y sont affichés
 * puis réaffichant tous les éléments présents en mémoire.
 * Cette fonction permet d'appliquer les mises à jour de la liste animals graphiquement
 */
function repaint() {
  clearInventory();
  fillInventory();
}

/**
 * Vide la section inventory de l'interface graphique
 */
function clearInventory() {
  var inventory = document.getElementById('inventory');
  while (inventory.hasChildNodes()) {
    inventory.removeChild(inventory.firstChild);
  }
}

/**
 * Rempli la section inventory de la liste des animaux avec
 * les animaux en mémoire
 */
function fillInventory() {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var deleteFunction = function() {
      deleteAnimal(animal.id);
      repaint();
    };
    var entry = generateAnimalTag(animal, deleteFunction);

    inventory.appendChild(entry);
  }
}

/**
 * Supprime l'animal correspondant à l'identifiant donné de la liste en mémoire
 * Cette fonction n'a pas d'impact sur l'interface graphique (il faut utiliser repaint pour cela)
 * @param {Number} id identifiant de l'animal à supprimer de la liste
 */
function deleteAnimal(id) {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    if (animal.id === id) {
      animals.splice(i, 1);
      break;
    }
  }
}

/**
 * 
 * @param {Object} animal génère le markup HTML pour un animal donné
 * @param {Function} deleteCallback fonction qui sera appelé au clic sur le bouton de suppression de l'animal
 */
function generateAnimalTag(animal, deleteCallback) {
  var entry = document.createElement('div');
  entry.classList.add('animal');

  var name = document.createElement('div');
  name.classList.add('animal-name');
  name.textContent = animal.name;

  var container = document.createElement('div');
  container.classList.add('container');

  var info = document.createElement('div');
  info.classList.add('animal-info');

  var specie = document.createElement('div');
  specie.textContent = 'Espèce : ' + animal.species;

  var race = document.createElement('div');
  race.textContent = 'Race : ' + animal.race;

  var age = document.createElement('div');
  age.textContent = 'Age : ' + animal.age;

  var picture = document.createElement('img');
  picture.classList.add('animal-image');
  picture.setAttribute('src', animal.photo);

  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', deleteCallback);

  info.appendChild(specie);
  info.appendChild(race);
  info.appendChild(age);

  container.appendChild(info);
  container.appendChild(picture);

  entry.appendChild(deleteButton);
  entry.appendChild(name);
  entry.appendChild(container);

  return entry;
}

/**
 * Listener au submit du formulaire : récupère les données du formulaire,
 * ajoute le nouvel animale à la liste en mémoire et déclenche la mise à jour
 * de l'interface graphique
 * @param {Event} e l'évènement de submit du formulaire
 */
function addAnimal(e) {
  e.preventDefault();
  var form = e.target;

  var name = form['input-name'].value;
  var species = form['input-species'].value;
  var race = form['input-race'].value;
  var age = form['input-age'].value;
  var photo = form['input-photo'].value;

  animals.push({
    name: name,
    species: species,
    race: race,
    age: age,
    photo: photo,
    id: id
  });
  id++;
  repaint();
}

/**
 * Fonction d'initialisation : ajoute l'event listener sur le formulaire de saisie des animaux
 */
function init() {
  document
    .getElementById('creation-form')
    .addEventListener('submit', addAnimal);
}
init();
