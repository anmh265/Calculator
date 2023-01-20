let num = 0

function factR(n){
     if(n <= 0){
          return 1
     }

     num = n * factR(n - 1)

     return num
}

console.log(factR(6))