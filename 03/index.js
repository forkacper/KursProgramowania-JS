let attempts = [];
let sum = 0;
let step = 0;

for(var i=1;i<=1000000;i++) {
    while (sum < 1) {
        step++;
        sum += Math.random();
            if(sum > 1) {
                attempts.push(step);
            }
    }
    sum = 0;
    step = 0;

    if (i == 1000000) {
        
        let sum2 = 0;
        attempts.forEach(funkcja);
       
        function funkcja(item) {
            sum2 += item;
        }
       
        console.log(sum2);
        wynik = sum2 / 1000000;
        console.log(wynik); 
    }
}

