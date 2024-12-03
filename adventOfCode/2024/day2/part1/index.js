
const fs = require('node:fs');

function solution() {
	
	let data = fs.readFileSync('./input.txt', 'utf-8');

	let numOfSafeReports = 0;	
	
	data = data.split("\n");

	for (let i = 0; i < data.length; i++) {
		const reportList = data[i];
		
		console.log(reportList);

		if (reportList.length < 1 ) {
			continue;
		}

		// then we know its increasing
		if (parseInt(reportList[0]) < parseInt(reportList[1])) {
			
			// valid until proven guilty
			let validity = true;

			for (let j = 0; j < reportList.length - 1; j++) {
				if (parseInt(reportList[j]) > parseInt(reportList[j+1])) {
					validity = false;
					console.log("invalid due to not consistent");	
					break;		
				}
				
				const numDistance = Math.abs(parseInt(reportList[j]) - parseInt(reportList[j+1]))
				
				if (numDistance > 3) {
					validity = false;	
					console.log("invalid due to num");	
					console.log(numDistance);
					break;
				}
			}
			
			if (validity) {
				numOfSafeReports++;
			}

		} else {
			// decreasing order	
			// inverse first signs	
		
			// valid until proven guilty
			let validity = true;

			for (let j = 0; j < reportList.length - 1; j++) {
				if (parseInt(reportList[j]) < parseInt(reportList[j+1])) {
					validity = false;
					console.log("invalid due to not consistent");	
					break;		
				}
				
				const numDistance = Math.abs(parseInt(reportList[j]) - parseInt(reportList[j+1]))
				
				if (numDistance > 3) {
					validity = false;	
					console.log("invalid due to num");	
					console.log(numDistance);
					break;
				}
			}
			
			if (validity) {
				numOfSafeReports++;
			}

		}

	}
	
	return numOfSafeReports;

}

console.log(solution());


