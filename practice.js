// // even num;
// for(let i = 1;i<=100; i++){
// if(i%2==0){
//     console.log(i)
// }
// }



//Game;
let gameNum = "25";
let userNum = prompt("Guess the game number : ");

while (userNum !== gameNum) {
userNum = prompt("Wrong number");
}

console.log("Congratulations,you enterad the right number");


// AI verson
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");

// while (Number(userNum) !== gameNum) {
//     userNum = prompt("Wrong number, try again:");
// }

// console.log("Congratulations, you entered the right number!");