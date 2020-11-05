arr = [1,5,3,9,0,10]
let l;
for (let i = 0; i < arr.length; i++) {
    l = i
    for (let j = i-1; j >=0; j--) {
        if(arr[l]< arr[j]){
           [ arr[j] , arr[l] ]= [arr[l] , arr[j]]
           l--
        }
    }
    
    
}
