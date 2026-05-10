                                                // Arrow funnction

// (a,b) => {
//     sum = a + b;
//     return sum;
// }

// let summ = (10,20);
// console.log(summ);


// const arrowMul = (a,b) => {
//     return a * b;
// }

// arrowMul(2,5);

// const printHello = () => console.log("Hello");
// console.log(printHello)




                            // practice of functions;

//          code for counting vovels


const countVovels = (str) => {
            let count = 0;
        for (const char of str) {
            if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
                // console.log(countVovels("yogendra"));
            {
            count++;
            }
    }
    console.log(count);
}
countVovels("Yogendra");