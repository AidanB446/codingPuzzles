
def majorEle(nums) :

    map = {}
    
    for i in nums :

        if i not in map :
            map[i] = 1 
            continue 


        map[i] = map[i] + 1

    

    largestKey = 0
    largestValue = 0

    for i in map :

        if map[i] > largestValue :
            largestValue = map[i]
            largestKey = i

    return largestKey 



