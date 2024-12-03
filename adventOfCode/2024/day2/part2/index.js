
const fs = require('node:fs');
	
function safe(levels) {
	
	if (levels[0] === levels[1]) {
		return false;
	}

	let not_increasing = false;	
	let not_decreasing = false;	
	
	for (let i = 0; i<levels.length - 1; i++) {
		if (!(levels[i] < levels[i+1])) {
			not_increasing = true;	
		}
	
		if (!(levels[i] > levels[i+1])) {
			not_decreasing = true;	
		}
		
		if (Math.abs(levels[i] - levels[i+1]) > 3) {
			return false;
		}	
	}
	
	if (not_decreasing && not_increasing) {
		return false;	
	}
	
	return true;	
}


function solution() {
	
	let data = fs.readFileSync('./input.txt', 'utf-8');

	let numOfSafeReports = 0;	
	
	data = data.split("\n");

	for (let i = 0; i < data.length; i++) {
		const levels = data[i].split(" ").map(function(x) { return parseInt(x)})	
		
		if (levels.includes(NaN)) {
			continue;
		}
		
		if (safe(levels)) {
			numOfSafeReports++;
		}
	}

	return numOfSafeReports;
}

console.log(solution());


