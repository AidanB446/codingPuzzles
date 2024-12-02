
def soultion() :
    
    totalDistance = 0

    f = open("./input.txt") 
    inp = f.read().split("\n")
    
    list1 = []
    list2 = [] 

    for line in inp :
        if len(line) < 1 :
            continue
    
        line = line.split("   ")

        list1.append(int(line[0]))
        list2.append(int(line[len(line) - 1]))

    list1.sort()
    list2.sort()
    

    for i in range(len(list1)) :
        val1 = list1[i] 
        val2 = list2[i]

        totalDistance = totalDistance + abs(val1 - val2)  

    return totalDistance

print(soultion())

