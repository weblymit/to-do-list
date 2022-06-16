document.getElementById("push").onclick = function () {
	let elInput = document.getElementById("todo-input").value;
	// condition validate form
	//Si le champ d'input est vide
	//Si la longueur de la valeur texte est inferieur à 5
	//Si la longueur de la tâche est supperieur à 35 caractères
	// Sinon on affiche sur la console "Tout est ok pour envoyer"
	if (elInput == "") {
		alert("Ajoute une tache");
	} else if (elInput.length < 3) {
		alert("Tache trop courte");
	} else if (elInput.length > 35) {
		alert("Tache trop longue");
	} else {
		console.log("Tout est Ok");
		// selectionne la div ou les taches vont être affichéés
		document.querySelector("#tasks").innerHTML += `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <span class="my-0">${elInput}</span>
      <button class="btn btn-danger">Delete</button>
    </div>
    `;
	}
};
