var a;
	console.log('The value of a is ' + a); // The value of a is undefined

	console.log('The value of b is ' + b); // The value of b is undefined
	var b;
	// This one may puzzle you until you read 'Variable hoisting' below

	var c = 10;
	console.log('The value of c is ' + c); // The value of c is 10
	
	
	console.log ('The value of d is ' + d); // The value of d is undefined

	var d  = 7;


	//console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

	let x;
	console.log('The value of x is ' + x); // The value of x is undefined

	console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
	let y; 