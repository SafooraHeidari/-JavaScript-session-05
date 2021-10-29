function currencyExchange(n, x, y, z, a, b, c){
    let num = 0;
    if ((x*a + y*b + z*c) < n) return num;
    for (let i = 0; i <= x; i++){
        for (let j = 0; j <= y; j++){
            for (let k = 0; k <= z; k++){
                if (k*c + j*b + i*a === n) num++;
            }
        }
    }
    return num;
}

console.log(currencyExchange(100,2,1,1,50,70,30));