// //                                     even num;
// for(let i = 1;i<=100; i++){
// if(i%2==0){
//     console.log(i)
// }
// }



//                                          Game;
// let gameNum = "25";
// let userNum = prompt("Guess the game number : ");

// while (userNum !== gameNum) {
// userNum = prompt("Wrong number");
// }

// console.log("Congratulations,you enterad the right number");


// AI verson
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");

// while (Number(userNum) !== gameNum) {
//     userNum = prompt("Wrong number, try again:");
// }

// console.log("Congratulations, you entered the right number!");



///                         find the avg of ARRAY ;

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for (let val of marks) {
//    sum += val;
// }

//  let avg = sum / marks.length;
//     console.log(`the average of marks is ${avg}` );


///                                       applying offer of 10 %

let items = [250,645,300,90,50];

 for (let i=0;i<items.length;i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
 }
    console.log(items);
