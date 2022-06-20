document.getElementById("push").onclick = function (e) {
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

		// Ajouter une tâche
		document.querySelector("#tasks").innerHTML += `
    <div class="d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
      <span class="my-0 taskname">${elInput}</span>
      <button class="btn btn-danger delete">Delete</button>
    </div>
    `;

		// delete task
		let tasksDelete = document.querySelectorAll(".delete");
		for (let i = 0; i < tasksDelete.length; i++) {
			tasksDelete[i].onclick = function () {
				this.parentNode.remove();
			};
		}
		// task done
		let tasksDone = document.querySelectorAll(".taskname");
		for (let i = 0; i < tasksDone.length; i++) {
			tasksDone[i].onclick = function () {
				this.classList.toggle("completed");
			};
		}

		document.querySelector("#todo-input").value = "";
	}
};
