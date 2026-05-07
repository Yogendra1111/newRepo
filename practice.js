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

// let items = [250,645,300,90,50];

//  for (let i=0;i<items.length;i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
//  }
//     console.log('The price of items after applying the offer is ',items);



///                                                   Arrey methods


// let fruits = ['apple','banana','mango','orange']
// console.log(fruits)

// fruits.push('litchi');
// fruits.push('watermelon','papaya');
// console.log(fruits);

// let deleteditem = fruits.pop();
// console.log('deleted',deleteditem);



//                                                  toString();
// let fruits = ['apple','banana','mango','orange']
// console.log(fruits);
// console.log(fruits.toString());


//                                        concat();   (join multiple arrays)
// let marval = ["ironman","thor"];
// marval.unshift("spiderman");            // unshift (add to first in array)
// console.log(marval);

// let dc = ['supreman','batman',"flash"];
// console.log(dc);  
// // console.log(marval.concat(dc));
// let deleted = dc.shift();                         //shift()   (delete first value of array)
// console.log('deleted : ',deleted);


//                                          slice() 
// let dc = ['supreman','batman',"flash"];
// console.log(dc.slice(0,2));




//                                          splice();
// let arr = [ 1,2,33,44,5,6,7,8,9,10];

// arr.splice(2, 2, 3, 4);                 //replece element;
// console.log(arr);

// let array = [1,2,5,6,7,8,9,10];            //Add element;
// array.splice(2,0,3,4);
// console.log(array);


// let array = [1,2,3,4,5,6,7,8,9,10];            // delete element;
// array.splice(2,2);
// console.log(array);