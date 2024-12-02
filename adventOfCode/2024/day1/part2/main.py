
def soultion() :
    
    simularityScore = 0

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
        
    for num in list1 :
        currScore = num * list2.count(num)
        
        simularityScore = simularityScore + currScore

    return simularityScore

print(soultion())

