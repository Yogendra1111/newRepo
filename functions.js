// function myfunction() {
//     console.log("We are learning java script");
//     console.log("in which");
//     console.log("we are learning functions");

// }

// myfunction();


// function mymessage(msg){    // paramiter
//     console.log(msg);
// }

// mymessage("we are starting of functions");      //argument


// function sum(a,b){

//     console.log(a+b);

// }
// sum(10,20);


// function sum(x,y,z) {
//     s = x + y + z
//     return s;
// }

// let sum_val = sum(67,45,88);
// console.log(sum_val);


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

