// const markMass = 78;
// const markHeight = 1.69
// const johnMass = 92;
// const johnHeight = 1.95;

// const bmiMark = markMass / (markHeight * markHeight);
// const bmiJohn = (johnMass / johnHeight **2);
// const bmiHigher =  (bmiMark > bmiJohn)
// console.log(bmiMark, bmiJohn, bmiHigher);

// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markMass = 78;
// const johnMass = 92;

// const bmiMark = markMass / (markHeight * markHeight)
// const bmiJohn = (johnMass / johnHeight **2);
// const bmiHigher = (markHeight > johnHeight);
// console.log(bmiJohn,bmiMark,bmiHigher);

// const firstName = 'nafiisa';
// const job = 'student';
// const birthYear = 2006;
// const now = 2024;
// const nafiisa = 'i,m ' + firstName + ' waxaan jira ' + (now - birthYear) + ' waxaan ahay ' + job ;
// console.log(nafiisa)

// const firstName = 'kalthuma';
// const job = 'student';
// const birthYear =2005;
// const now = 2024;
// const kalthuma = 'i,m ' + firstName +  ' wxaan jiraa ' + (now-birthYear) +' wxan ahy ' +job;
// console.log(kalthuma);

// const firstName = 'kalthuma';
// const job = 'student';
// const birthYear = 2005;
// const now = 2024;
// const kalthuma = `i,m ${firstName}  waxaan ahay ${job} wxaan jiraa ${now-birthYear}`
// console.log(kalthuma)

// const age = 15;
// if (age >= 18){
//     console.log("you can take license driving");
// }
// else{
//     const leftYears = (18 - age);
//     console.log(`wxaa kaaga dhiman ${leftYears}, sano.`)
// }

// const birthYear = 1998;
// let century;
// if (birthYear <= 2000){
//     century = 20;
// }else (birthYear >= 2000) ;{
//     century = 21;
// }
// console.log(century);

// const markMass = 78;
// const markHeight = 1.69
// const johnMass = 92;
// const johnHeight = 1.95;

// const bmiMark = markMass / (markHeight * markHeight);
// const bmiJohn = (johnMass / johnHeight **2);
// console.log(bmiMark, bmiJohn);
// if(bmiMark > bmiJohn){
//     console.log(`mark bmi ${bmiMark}is higher than johns bmi${bmiJohn}`);
// }else if ((bmiMark < bmiJohn)){
//     console.log(`john bmi${bmiJohn} is higher than mark bmi ${bmiMark}`)
// }

// type conversion
// const inputYear = '1991'
// console.log(Number(inputYear)+18, inputYear);
// console.log(inputYear + 18);

// console.log('23', 23);

// console.log(Number('jonas'));
// console.log(typeof NaN)

// console.log('i,m ' + 23 + ' years old');
// console.log('i,m ' + String(26) + ' years old');

// console.log('10'+'8'+ 3);
// console.log(22 * 2);
// console.log(11 / 3);

// when we are in javascript string plus operator is not working adding but minus convert into a number whatever string
// let n = '1' + 1;
// n = n - 1;
// console.log(n)

// falsy values
// const lacag = 0;
// if(lacag){
//     console.log('dont spend it at all')
// }else {
//     console.log('get a job')
// }
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(''));
// console.log(Boolean(NaN));

// let height = 10;
// if(height){
//     console.log('yay ');
// }else{
//     console.log('nope');
// }

// const age = '18';
// if (age === 18) console.log('srict');
// if (age == 18)console.log('loose');

// const favoriteNumber = Number (prompt('what is your fav number'));
// console.log(favoriteNumber);
// if(favoriteNumber === 23) console.log('wow this is the best');
// else if(favoriteNumber === 9) console.log('wow u get it the best number');
// else if(favoriteNumber !== 23) console.log('why not? try again');

// const hasGoodVision = true; //a
// const hasDriveLicense = true; //b
// console.log(hasDriveLicense && hasGoodVision);
// console.log(hasDriveLicense || hasGoodVision);
// console.log(!hasDriveLicense)

// if(hasDriveLicense && hasGoodVision){
//     console.log('sarah eligable to drive');
// }else{
//     console.log('someone else will drive.....');
// }

// const Istired = false; //c
// if(hasDriveLicense && hasGoodVision && !Istired){
//     console.log('sarah eligable to drive');
// }else{
//     console.log('someone else will drive.....');
// }

// coding chalenge three

// const  scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreKoalas, scoreDolphins);
// if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("koalas win the teorapy🏆");
// }
// else if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins win the teorapy🏆");
// }
// else if(scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100){
//     console.log('both win🏆')
// }
// else console.log('no one win the terapy😪')

// // lecture 26
// const day = 'friday';
// switch(day){
//     case 'monday':
//         console.log('rest day');
//         break;
//         case 'tuesday':
//             console.log('working hard');
//             break;
//             case 'wednesday':
//                 case 'thursday':
//                     case 'friday':
//                 console.log('work easy');
//                 break;
//                 default:
//                     console.log('invalid day')
// }

// onother way

// const day = 'thursday';
// if(day === 'friday' || day === 'thursday'){
//     console.log('you can rest')
// }
// else if(day === saturday){
//     console.log('work hard');
// }
// else{
//     console.log('invalid day')
// }

// lecture27
// expression

// console.log(`hey i,m nafisa and i'm ${2024-2006} years old`);

// // statement
// if(23 > 10){
//     const str = '23 is bigger';
// };

// lecture28 = conditional operator or ternary operator

// const age = 18;
// age >= 23 ? console.log('you can drink🍻') : console.log('you can not drink🥂');

// let age = 20;
// let voteable = (age >=  18) ? 'you can' : 'you can not'
// console.log(voteable);
// let age = 20;
// let drink;
// if (age  => 18){
//     drink = 'wine'
// }
// else{
//     drink = 'water'
// };
// console.log(drink);

// let age = 17;
// console.log(`i like to drink ${(age >=  18) ? 'water💧' : 'wine🍷'}`);

// coding chalenge 4

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//angela course javascript section 14 (93= functions part one)
// function getMilk(money) {
//   console.log("go up");
//   console.log("go next");
//   console.log("move up");
//   const numberOfBottles = Math.floor(money / 1.5);
//   console.log("buy " + numberOfBottles + " bottles of milk");
//   console.log("go up");
//   console.log("go up");
//   console.log("go up");
//   console.log("go up");
//   console.log("go up");
//   console.log("go up");
// }
// getMilk(5);
//  function part two

// function lifeInWeeks(age){
//    const  yearsRemaining = 90 - age;
//    const  monthsRemaining = yearsRemaining * 12 ;
//    const weeksRemaining = yearsRemaining * 52;
//    const daysRemaining = yearsRemaining * 365;
//    console.log("You have " + daysRemaining  + " days," + weeksRemaining + " weeks, and " + monthsRemaining + " months left.")
// }
// lifeInWeeks(18);

// section 14 coding exercise
// function calculateBMI(weight, height) {
//    const bmi = weight / (height * height);
//    return (bmi);
// }
// var bmi = calculateBMI(60, 1.8);
// console.log(bmi)

//section 15 (99)
// let n = Math.random();
// n = n * 6 +1;
// n = Math.floor(n);
// console.log(n)


// let yourName = prompt("what is your name?")
// let herName = prompt("what is her name?")

// let loveScore = Math.random() * 100 + 1;
// loveScore = Math.floor(loveScore);

// if(yourName === "" || herName === ""){
//    alert("please enter both names")
// }
// else if(yourName.toLowerCase === 'nafiisa' || herName.toLowerCase === 'juju'){
//    alert("your love score is 100%")
// }else{
//    alert("your love score " + loveScore + "%")
// }



//(100)
// prompt("what is your name?")
// prompt("what is her name?")
// let loveScore = Math.random() * 100 +1;
// loveScore = Math.floor(loveScore);
// if(loveScore => 70){
//    alert("your love score " + loveScore + "%" + ", you two love each other")
// }
// else{
//    alert("your love score " + loveScore + "%")
// }

//coding exercise 4


// function bmiCalculator(height, weight){
//     let bmi = weight / (height * height);
//     if(bmi < 18.5){
//         return ("Your BMI is " + bmi + " ,so you are underweight.")
//     }
//     else if(bmi > 18.5 || bmi <= 24.9){
//         return ("Your BMI is " + bmi + ", so you have a normal weight.")
//     }
//       else if(bmi > 24.9){
//         return ("Your BMI is" + bmi + ", so you are overweight.")
//     }
// }
// let bmi = bmiCalculator(1.8, 60);
// console.log(bmi)




// function bmiCalculator(height, weight){
//     let bmi = weight  / (height * height)
//     let interpretation;
//     if(bmi < 18.5){
//         interpretation = "Your BMI is " + bmi + " ,so you are underweight.";
//             }
//             else if(bmi > 18.5 || bmi <= 24.9){
//                 interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//             }
//               else if(bmi > 24.9){
//                 interpretation = "Your BMI is" + bmi + ", so you are overweight.";
//             }
//             return interpretation;
// }
// let bmi = bmiCalculator(1.8, 60);
// console.log(bmi);


// leap year
// function isleep(year){
//     if(year % 4 === 0){
//         if(year %100 === 0){
//             if(year % 400 === 0){
//                 return "leap year";
//             }else{
//                 return " not leap year";
//             }
//         }else{
//             return "leap year";
//         }
//     }else{
//         return "not leap year";
//     }
// }
// let year = 2023;
// if(isleep(year)){
//     console.log(year + " is a leap year")
// }
// else{
//     console.log(year + "isnot leep year");
// }

// array
// const guestName = ['asma', 'juju', 'omar', 'rakia' , 'balqis'];
// const guest = prompt("what is their name?");

// if(guestName.includes(guest)){
//     alert("welcome❤️(●'◡'●)");
// }else{
//     alert("try again")
// }


