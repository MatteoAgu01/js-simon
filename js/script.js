// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Start game button
document.getElementById("startGame").addEventListener("click", start);

// Button submit user num
document.getElementById("submitBtn").addEventListener("click", checkNumber);

let numGenerated;
let timer;

// Start game function
function start() {
	// Reset the array
	numGenerated = new Array();

	// Reset sections
	document.getElementById("rndNumber").innerHTML = "";
	document.getElementById("rndNumber").setAttribute("class", "");
	document.getElementById("numbers").setAttribute("class", "d-none");
	document.getElementById("result").setAttribute("class", "d-none");

	// Reset timer
	clearTimeout(timer);

	// Cycle for generated and push five random number into the array
	for (let i = 0; i < 5; i++) {
		// Add to the array a random number 0..100
		numGenerated.push(Math.round(Math.random() * 100));

		// Print array in HTML
		document.getElementById("rndNumber").innerHTML += numGenerated[i] + " ";
	}

	console.log(numGenerated);

	timer = setTimeout(showInputs, 5000);
	//30 secondi è facile
}

function showInputs() {
	document.getElementById("rndNumber").setAttribute("class", "d-none");
	document.getElementById("numbers").removeAttribute("class");
	document.getElementById("result").removeAttribute("class");
}

function checkNumber() {
	// keep value of input
	let num1 = Number(document.querySelector("input[name= 'num1']").value);
	let num2 = Number(document.querySelector("input[name= 'num2']").value);
	let num3 = Number(document.querySelector("input[name= 'num3']").value);
	let num4 = Number(document.querySelector("input[name= 'num4']").value);
	let num5 = Number(document.querySelector("input[name= 'num5']").value);

	//keep HTML h4 for result
	let userResult = document.getElementById("userNumResult");
	let cpuResult = document.getElementById("cpuNumResult");
	let result = document.getElementById("result");

	//array for user number 
	let userNumbers = [num1, num2, num3, num4, num5];

	//printing result of user
	userResult.innerHTML = "I tuoi dati ";

	userNumbers.forEach(element => {
		userResult.innerHTML += element + " ";
	});

	//printing result of cpu
	cpuResult.innerHTML = "I dati generati ";

	numGenerated.forEach(element => {
		cpuResult.innerHTML += element + " ";
	});

	let numOk = 0;

	result.inneHTML = "";

	// Cycle ofr the number of number generated
	for (let i = 0; i < 5; i++) {
		if(numGenerated[i] == userNumbers[i]){
			// If numbers are equal
			numOk++;
			result.innerHTML += "N " + Number(i+1) +" OK <br />";
		}
	}

	result.innerHTML += "<br />Hai indovinato " + numOk;
	result.innerHTML += (numOk > 1) ? " numeri. " : " numero. ";
}
