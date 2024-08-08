
var finalString = function(s) {
	let final_string = "";


	for(let i = 0; i < s.length; i++) {
		if (s[i] === "i") {
			final_string = final_string.split("").reverse().join("")
		}				
		
		else {
			final_string = final_string + s[i];
		}
	}	


	return final_string;
}

