package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	
	data, _ := os.ReadFile("./input")
	inp := string(data)	
	input := strings.Split(inp, "\n")


	numOfIncrements := 0

	for i:=0;i<len(input)-1;i++ {
		iInt, _ := strconv.Atoi(input[i])	
		nInt, _ := strconv.Atoi(input[i + 1])	

		if iInt < nInt {
			numOfIncrements++;
		}
	
	}
	
	fmt.Println(numOfIncrements)

}

