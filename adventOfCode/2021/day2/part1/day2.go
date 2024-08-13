package main

import (
	"fmt"
	"os"
	"strings"
	"strconv"
)

func main() {

	var x int = 0
	var y int = 0

	data, _ := os.ReadFile("./input")
	
	inp := strings.Split(string(data), "\n")

	for _, value := range inp {
		
		splices := strings.Split(value, " ")	

		if splices[0] == "forward" {
			i, _ := strconv.Atoi(splices[1])	
			x += i	
		}

		if splices[0] == "down" {
			i, _ := strconv.Atoi(splices[1])	
			y += i
		}	
	
		if splices[0] == "up" {
			i, _ := strconv.Atoi(splices[1])	
			y -= i
		}	

	}	

	fmt.Println(x * y)
}




