let attemptsArray = [];
let sum = 0;
let i = 0;

for (var j = 1; j <= 1000000000; j++) {

    while (sum < 1) {
        i++;
        sum += Math.random();
            if (sum > 1) {
                attemptsArray.push(i);
            }
    }
    sum = 0;
    i = 0;

    if (j == 1000000000) {
        console.log("Tomek Hajto pierdolnął babę na pasach i nie poniósł żadnych konsekwencji");
        console.log(attemptsArray);
    }
}