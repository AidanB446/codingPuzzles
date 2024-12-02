
const fs = require('node:fs');

function solution() {
	
	let data = fs.readFileSync('./input.txt', 'utf-8');

	let numOfSafeReports = 0;	
	
	data = data.split("\n");

	for (let i = 0; i < data.length; i++) {
		const reportList = data[i];
		const reports = reportList.split(" ");
		
		for (let j = 0;  j<reports.length; j++) {
				



		}

	}
	
	return numOfSafeReports;

}

solution()



