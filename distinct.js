const distinctSum1 = () => {
    let sum = 0;
    const arr1 = [12, 13, 6, 10]
    const arr2 = [13, 10, 16, 15]
    for(let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                sum += arr1[i] *2
            }
        }
    }
    return sum;
}
