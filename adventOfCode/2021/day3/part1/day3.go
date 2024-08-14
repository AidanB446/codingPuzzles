package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	
	data, _ := os.ReadFile("./input")

	inp := strings.Split(string(data), "\n")
	
	gammarate := []int {}
	eplisionRate := []int {}

	for i := 0; i < 12; i++ {
		
		// running count of how many 1's there are
		runningCount0 := 0
		runningCount1 := 0
		

		for _, ele := range inp {
			
			if ele[i] == "1" {
				runningCount1++
			}
			
			else {
				runningCount0++
			}

		}
		
		if runningCount0 > runningCount1 {
			gammarate = append(gammarate, runningCount0)
			eplisionRate = append(eplisionRate, runningCount1)	
		}	
		
		else {
			eplisionRate = append(eplisionRate, runningCount0)
			gammarate = append(gammarate, runningCount1)	
		}

	}	
	
	// convert binary to decimal, then multiply/	


}

