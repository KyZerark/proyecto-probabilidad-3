function poissonA() {
	const n = parseInt(document.querySelector('#nvecesA').value);
	const lambda = parseInt(document.querySelector('#lamb').value);
	const e = 2.71828;
	var pr = 0, resultadoA;
	for (var x = 0; x <= n; x++) {
	   pr = pr + (Math.pow(e,(lambda*-1))*(Math.pow(lambda, x)/factorial(x)));
	}
	resultadoA = (1 - pr)*100;
	document.querySelector('#resultA').innerHTML = resultadoA + "%";
}

function poissonB() {
	const n = parseInt(document.querySelector('#nvecesB').value);
	const lambda = parseInt(document.querySelector('#lamb').value);
	const e = 2.71828;
	var pr = 0, resultadoB;
	for (var x = 0; x <= n; x++) {
	   pr = pr + (Math.pow(e,(lambda*-1))*(Math.pow(lambda, x)/factorial(x)));
	}
	resultadoB = pr*100;
	document.querySelector('#resultB').innerHTML = resultadoB + "%";
}

function factorial(num) {
	var factorial = 1; 
	for (var i = 1; i <= num; i++) {
		factorial = factorial * i; 
	}
	return factorial;
}