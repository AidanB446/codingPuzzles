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
	
	gammarate := ""
	eplisionRate := ""

	for i := 0; i < len(inp[0]); i++ {
		
		runningCount0 := 0
		runningCount1 := 0

		for _, ele := range inp {
			
			if len(ele) == 0 {
				continue
			}	

			if string(ele[i]) == "1" {
				runningCount1++
				continue
			} else {
				runningCount0++
			}

		}
		
		if runningCount0 > runningCount1 {
			gammarate = (gammarate + "0")
			eplisionRate = (eplisionRate + "1")
		} else {
			eplisionRate = (eplisionRate + "0")
			gammarate = (gammarate + "1")	
		}

	}	
	
	gamma, _ := strconv.ParseInt(gammarate, 2, 64)
	eplision, _ := strconv.ParseInt(eplisionRate, 2, 64)
	
	fmt.Println(gamma * eplision)

}

