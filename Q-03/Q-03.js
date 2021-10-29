function Subasa(n,a,b,arr){
    if (arr[0] <= 0 || arr[n-1] > 90+b) return 'NO :('
    for (let i = 0; i < n; i++){
        if (arr[i]+a < arr[i-1]) return 'NO :('
    }
    return 'YES :)'
}

console.log(Subasa (4,2,2,[4,48,45,80]))
