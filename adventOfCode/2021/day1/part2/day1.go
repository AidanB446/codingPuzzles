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

	for i:=0;i<len(input)-3;i++ {
		count1 := 0	
		count2 := 0		

		for j:=0;j<3;j++ {
			intt, _ := strconv.Atoi(input[i+j])	
			count1 = count1 + intt
		}

		for k:=0;k<3;k++ {
			intt, _ := strconv.Atoi(input[i+k+1])	
			count2 = count2 + intt
		}

		if count2 > count1 {
			numOfIncrements++
		}
	}
	
	fmt.Println(numOfIncrements)
}

