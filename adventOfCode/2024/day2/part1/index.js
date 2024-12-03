
const fs = require('node:fs');
	
function safe(levels) {
  if (arr.length <= 2) return true;
  const minDist = 1, maxDist = 3;
  let isIncreasing = false;
  let isDecreasing = false;
  let badDist = false;
  let prev = arr[0];
  let curr, dist;

  for (let i = 1; i < arr.length; i++) {
    curr = arr[i];
    if (curr > prev) isIncreasing = true;
    if (curr < prev) isDecreasing = true;
    dist = Math.abs(curr-prev);
    badDist = badDist || (dist < minDist) || (dist > maxDist);
    prev = curr;
  }
  return !badDist && !(isIncreasing && isDecreasing);

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


