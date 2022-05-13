export default function helloSomeone(value) {
	if (typeof(value) == 'string') {
		if (value == "")
			console.log("Who are you?");
		else
			console.log("Hello " + value + "!");
	}
	else if (typeof(value) == 'object' && value == null)
		console.log("I am null and void");
	else if (typeof(value) == 'number') {
		if (isNaN(value))
			console.log("Age is just a number");
		else if (value <= 0)
			console.log("I am Benjamin Button!");
		else
			console.log("My age is " + value.toString());
	}
	else if (typeof(value) == 'undefined')
		console.log("Nobody can define me!");
}
